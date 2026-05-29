const express = require("express");
const mongoose = require("mongoose");
const dotenv = require("dotenv");
const User = require("./models/User");

// Load environment variables from the config/.env file.
dotenv.config({ path: "./config/.env" });

const app = express();
const PORT = process.env.PORT || 5000;

// Allow Express to read JSON data sent in request bodies.
app.use(express.json());

// Connect the application to MongoDB using the URI from the .env file.
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => console.log("MongoDB connected successfully"))
  .catch((error) => console.error("MongoDB connection error:", error.message));

// GET route: return all users from the database.
app.get("/users", async (req, res) => {
  try {
    const users = await User.find();
    res.status(200).json(users);
  } catch (error) {
    res.status(500).json({ message: "Failed to get users", error: error.message });
  }
});

// POST route: add a new user to the database.
app.post("/users", async (req, res) => {
  try {
    const newUser = await User.create(req.body);
    res.status(201).json(newUser);
  } catch (error) {
    res.status(400).json({ message: "Failed to create user", error: error.message });
  }
});

// PUT route: edit one user by ID.
app.put("/users/:id", async (req, res) => {
  try {
    const updatedUser = await User.findByIdAndUpdate(req.params.id, req.body, {
      new: true,
      runValidators: true,
    });

    if (!updatedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json(updatedUser);
  } catch (error) {
    res.status(400).json({ message: "Failed to update user", error: error.message });
  }
});

// DELETE route: remove one user by ID.
app.delete("/users/:id", async (req, res) => {
  try {
    const deletedUser = await User.findByIdAndDelete(req.params.id);

    if (!deletedUser) {
      return res.status(404).json({ message: "User not found" });
    }

    res.status(200).json({ message: "User deleted successfully", user: deletedUser });
  } catch (error) {
    res.status(400).json({ message: "Failed to delete user", error: error.message });
  }
});

// Start the Express server.
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const fs = require('fs');
const path = require('path');
try {
  const envFile = fs.readFileSync(path.resolve(__dirname, '.env'), 'utf8');
  envFile.split('\n').forEach(line => {
    const match = line.match(/^\s*([\w.-]+)\s*=\s*(.*)?\s*$/);
    if (match) {
      let key = match[1];
      let value = match[2] || '';
      value = value.replace(/(^['"]|['"]$)/g, '').trim(); // Remove quotes
      process.env[key] = value;
    }
  });
} catch (e) { /* ignore */ }

const express = require("express");
const cors = require("cors");
const connectDB = require("./config/db");
const placeRoutes = require("./routes/placeRoutes");



const app = express();

// Middleware
app.use(cors());
app.use(express.json());

// Connect to Database
connectDB();

// Default Route
app.get("/", (req, res) => {
  res.send("TravelBharat Backend is Running! 🔥 Use /places to get data or /add to seed demo data.");
});

// Use Routes
app.use("/", placeRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
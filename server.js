require('dotenv').config();
const express = require('express');
const job = require('./cron.js');
const brandRoute = require("./routes/brand.routes");
const deviceRoute = require("./routes/device.routes");

const app = express();

// Middleware for parsing JSON request bodies
app.use(express.json());

// job.start();

// Define routes
app.use("/api/brands", brandRoute);
app.use("/api/device", deviceRoute);

// Routes
app.get("/", (req, res) => {
    res.send("TS Mobile API");
});

const PORT = process.env.PORT || 5000;
// Start the Express server
app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});

const express = require("express");
const app = express();
const cors = require("cors");                 
const errorHandler = require("./middleware/errorHandler");

// 1️⃣ ENABLE CORS (VERY IMPORTANT)
app.use(cors());

// 2️⃣ BODY PARSER
app.use(express.json());

// 3️⃣ COMPONENT ROUTES
const componentRoutes = require("./routes/componentRoutes");
app.use("/api/components", componentRoutes);

// 4️⃣ BUILD ROUTES
const buildRoutes = require("./routes/buildRoutes");
app.use("/api/build", buildRoutes);

// 5️⃣ HEALTH CHECK
app.get("/api/health", (req, res) => {
  res.json({ status: "OK" });
});

// 6️⃣ ERROR HANDLER (ALWAYS LAST)
app.use(errorHandler);

module.exports = app;


const express = require("express");
const { uuid } = require("uuidv4");
const PORT = process.env.PORT || 3001;
const app = express();
const fs = require("fs");

// don't forget to
app.use("/api", apiRoutes);

app.listening(PORT, () => {
  console.log(`API server now on ${PORT}!`);
});

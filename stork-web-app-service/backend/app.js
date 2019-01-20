const express = require("express");

const app = express();

app.use("/api/storks", (req, res, next) => {
  const storks = [
    { stork_id: "STR0001", nickname: "MonaLisa" },
    { stork_id: "STR0002", nickname: "LukesStork" },
    { stork_id: "STR0003", nickname: "GwynnsStork" }
  ];
  // 200 = Success
  res.status(200).json({
    message: "Storks fetched sucessfully",
    storks: storks
  });
});

module.exports = app;

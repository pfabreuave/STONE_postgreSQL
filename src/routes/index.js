/**
 * Arquivo: src/routes/index.js
 * Descrição: arquivo responsável pela chamada da Api da aplicação.
 */

const express = require("express");

const router = express.Router();

router.get("/api", (req, res) => {
  res.status(200).send({
    success: "true",
  });
});

router.post("/api", (req, res) => {
  res.status(200).send({
    success: "true",
  });
});

module.exports = router;

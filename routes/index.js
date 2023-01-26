const express = require('express');

const router = express.Router();

router.get('/', (req, res) => { 
    res.send("rodando do index");
});

module.exports = router;
const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    res.send("rodando do index");
});

router.get('/rota1', (req, res) => { 
    res.send("rodando do index rota1");
});

router.get('/rota2', (req, res) => { 
    let nome = req.query.nome;
    let idade = req.query.idade;
    res.send("Ola "+ nome + " voce tem "+ idade + " anos de idade");
});

module.exports = router;
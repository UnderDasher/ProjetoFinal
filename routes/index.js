const express = require('express');
const router = express.Router();

router.get('/posts/:slug', (req, res) => { 
    let slug = req.params.slug;
    res.send("slug   do post: "+ slug)    ;
});

router.get('/rota1', (req, res) => { 
    res.send("rodando do index rota1");
});


router.get('/rota2', (req, res) => { 
    let nome = req.query.nome;
    let sobrenome = req.query.sobrenome;
    let idade = req.query.idade;
    res.json({
        dados: nome + ' ' + sobrenome + ' tem ' + idade
    })
});

module.exports = router;
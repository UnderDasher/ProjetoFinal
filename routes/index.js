const express = require('express');
const router = express.Router();

router.get('/', (req, res) => { 
    let obj = {
        'nome': req.query.nome,
    };
    res.render('home',obj);
});

router.get('/rota2', (req, res) => { 
    let obj = {
        disciplina1:[
            {
                nome:'Algoritmo e Lógica de Programação',
                nota:'9.9',
                frequencia:'97.50'
            },
            {
                nome:'Modelagem de Banco de Dados',
                nota:'6.5',
                frequencia:'95.00'
            },
            {
                nome:'Engenharia de Software I',
                nota:'7.5',
                frequencia:'100.00'
            },
            {
                nome:'Engenharia de Software I',
                nota:'7.0',
                frequencia:'100.00'
            },
            {
                nome:'Desenvolvimento Web I',
                nota:'9.2',
                frequencia:'95.00'
            },
            {
                nome:'Design Digital',
                nota:'9.5',
                frequencia:'100.00'
            },
        ],
        disciplina2:[
            {
                nome:'Banco de Dados – Relacional',
                nota:'6.0',
                frequencia:'95.00'
            },
            {
                nome:'Estrutura de Dados',
                nota:'7.1',
                frequencia:'100.00'
            },
            {
                nome:'Engenharia de Software II',
                nota:'6.0',
                frequencia:'95.00'
            },
            {
                nome:'Técnica de Programação I',
                nota:'6.9',
                frequencia:'100.00'
            },
            {
                nome:'Desenvolvimento Web II',
                nota:'-',
                frequencia:'-'
            },
            {
                nome:'Matemática para Computação',
                nota:'6.8',
                frequencia:'100.00'
            },
        ]

    };
    res.render('rota2',obj);
});

router.get('/rota3', (req, res) => { 
    let obj = {
        h79:['Gestão Ágil de Projetos de Software','Banco de Dados - Não relacional','Desenvolvimento Web III','Álgebra Linear','Técnica de Programação II'],
        h911:['Gestão Ágil de Projetos de Software','Banco de Dados - Não relacional','Desenvolvimento Web III','Álgebra Linear','Técnica de Programação II'],
        h1113:['-','Inglês I','Interação Humano Computador','-','-']
    };
    res.render('rota3',obj);
});

module.exports = router;
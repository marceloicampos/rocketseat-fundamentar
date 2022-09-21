const express = require('express')

const app = express()

app.set('view engine', 'ejs')

app.get('/', (req, res) => {
    const items = [
        {
            title: 'D',
            message: 'esenvolvendo com'
        },
        {
            title: 'E',
            message: 'JS, eu'
        },
        {
            title: 'M',
            message: 'arcelo nas'
        },
        {
            title: 'A',
            message: 'ulas de EJS'
        },
        {
            title: 'I',
            message: 'nstalei o'
        },
        {
            title: 'S',
            message: 'ervidor'
        }
    ]
    const subtitle = 'É Uma linguagem de modelagem para criação de páginas HTML utilizando JS'
    res.render('pages/index', {
        qualitys: items,
        sub: subtitle
    }) // index.ejs
})

app.get('/sobre', (req, res) => {
    res.render('pages/about') // about.ejs
})

app.listen(8080)
console.log('servidor rodando')

// app.listen(8080, () => {
//     console.log('Server is running...')
// })

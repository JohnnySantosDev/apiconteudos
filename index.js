const express = require('express')
const app = express()
const cors = require('cors')

app.use(cors());
app.get('/conteudos', function (req, res) {
    const acont = [
        {
            desc: "CRISTIANO RONALDO DESTRÓI, FAZ 2, E PORTUGAL MASSACRA LIECHTENSTEIN NAS ELIMINATÓRIAS PARA A EURO",
            url: "https://www.youtube.com/embed/5wnt8eMGiC8",
            tit: "CR7 da Show"
        }
    ]
  res.send(acont)
})

app.listen(process.env.PORT ||3000) 

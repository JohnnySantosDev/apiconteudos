const express = require('express')
const app = express()
const cors = require('cors');
app.use(cors());
app.use(express.json());
app.get('/conteudos', function (req, res) {
    const acont = [
        {
            id : "0000001",
            desc: "CRISTIANO RONALDO DESTRÓI, FAZ 2, E PORTUGAL MASSACRA LIECHTENSTEIN NAS ELIMINATÓRIAS PARA A EURO",
            url: "https://www.youtube.com/embed/5wnt8eMGiC8",
            tit: "CR7 da Show"
        }]
    
  //  console.log(acont)
  res.send(acont)

})

app.listen(process.env.PORT ||3001) 

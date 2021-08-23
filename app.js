const express = require('express');
const mongoose = require('mongoose')
const bodyParser = require('body-parser')
const cors = require('cors')
require('dotenv/config');

const app = express();


app.use(cors())
app.use(bodyParser.json())

//Importar Rotas

const cardRoute = require('./routes/cards');

app.use('/cards', cardRoute);

//Routas

app.get('/', (req, res)=>{
    res.send('<h1>Estamos na home</>');
})

//Conections
mongoose.connect(
    process.env.DB_CONNECTION,
    { useNewUrlParser: true, useUnifiedTopology: true },
    ()=> console.log('Conectado ao banco')
)



//Porta ouvindo server
app.listen(process.env.PORT || 3003, () => {
    const port = server.address().port;
    console.log(`Express is working on port ${port}`);
});

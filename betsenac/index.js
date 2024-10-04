const express = require('express') 

const recursosClientes = require('./recursos/clientes')  
const recursosApostas= require('./recursos/apostas')  

const app = express()
const port = 3000 

app.use(express.json()) 

app.use('/clientes', recursosClientes) 
app.use('/apostas', recursosApostas)  


app.listen(port, () => {
    console.log(`Example app listening on port ${port}`)
}) 

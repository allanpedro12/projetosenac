const express = require('express')
const app = express()
const port = 3000

app.use(express.json()); 

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/teste', (req, res) => {
    res.send('Teste', 201) 
  })

  app.get('/horario', (req, res) => {
    res.send('sucesso!')
  })

  app.post('/soma', (req, res) => {
    console.log( req.body)
    const { numero1, numero2 } = req.body 
    let resultado = numero1 + numero2
    res.send('Resultado: ' + resultado) 
  })

  app.post('/media', (req, res) => {
    console.log( req.body)
    const { numero1, numero2, numero3} = req.body 
    let media = (numero1 + numero2 + numero3) /3 
    res.send(' Media igual a: ' + media) 
  })
  
  app.post('/nomes', (req, res) => {
    console.log( req.body)
    const { nomes, qtde } = req.body
    let resultado = nomes + '\n  ' 
    res.send( resultado.repeat(qtde)) 
  })
 

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})  
 
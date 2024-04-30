const express = require('express')

const app = express()

const PORT = 3000

app.post('/Feliistas', (req,res) =>  {
    res.send("hello miss felicity, how are you? ")
})

app.listen(PORT, ()  =>  {
    console.log('My App Is Working Fine')
} )
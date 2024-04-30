//assignment by Mr David Mayowa
//step one:Import Express and create an instance
express = require('express')
const app = express()
const port = 3000;
//step 2 Adding the API endpoints
// GET,POST.PUSH,PATCH AND DELETE
// a. GET endpoint
app.get('/Feliistas',(req,res)=>{
    res.send('Hello Mulie');
})
//b.POST endpoint
app.post ('/Feliistas',(req,res) =>{
    res.send('Hello James, this is a post endpoint');
})  
//c.PUT endpoint
app.put('/Feliistas',(req,res)=> {
    res.send('Hello James, this is my put endpoint');
})
//d.PATCH endpoint
app.patch('/Feliistas',(req,res)=>{
    res.send('Hello Mary, this is from patch endpoint');
})
//e.PUSH endpoint
app.push('/Feliistas', (req,res)=>{
res.send('Hello Felix, this is from push endpoint');
})

app.listen(PORT, ()=>{
    console.log('server is running on port ${port}')
})
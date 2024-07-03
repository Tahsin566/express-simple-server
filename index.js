import express from 'express'
import cors from 'cors'

const app = express()

app.use(cors())
app.use(express.json())

let arr = [
    {name:'Tahsin',age:26},
    {name:'Tuhin',age:23},
    {name:'Badar',age:22},
    {name:'Apu',age:24},
    {name:'Najibur',age:23},
    {name:'Dip',age:25}
]

app.get('/',(req,res)=>{
    res.send('Hello Simple app express')
})

app.get('/json',(req,res)=>{

    res.json({a:1,b:2,c:3})

})

app.get('/arr',(req,res)=>{

    res.json(arr)

})


app.post('/post',(req,res)=>{

    console.log(req.body);
    res.json({name:'Tahsin',age:26,year:2000})
})

app.listen(4000,()=>{
    console.log('App running on port 4000');
    
})
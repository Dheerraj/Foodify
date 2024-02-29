const connectToMongo = require('./db');
const express=require('express')
const app=express()
const cors=require('cors')
const port = 3005

/*app.use((req,res,next)=>{
    res.setHeader("Access-Control-Allow-Origin","http://localhost:3001")
    res.header(
        "Access-Control-Allow-Headers",
        "Origin, X-Requested-With, Content-Type,Accept"
    );
    next()
})*/
app.use(cors())
connectToMongo();
app.get('/',(req,res)=>{
    res.send("hello World")
})

app.use(express.json())
app.use('/api',require('./routes/CreateUser'))
app.use('/api',require('./routes/DisplayData'))
app.use('/api',require('./routes/OrderData'))
app.listen(port,()=>
{
    console.log(`app listing on port: ${port}`)
})
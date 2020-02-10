const express = require('express')
const cors = require('cors')
const BodyParser = require("body-parser");
const bearerToken=require('express-bearer-token')

const app = express()

const PORT = process.env.PORT || 2020

app.use(cors())//buat izin dari frontend ke backend
app.use(bearerToken())//buat token akses token
app.use(BodyParser.urlencoded({ extended: false }));// buat foto 
app.use(BodyParser.json())// buat ngirim data pake req.body
app.use(express.static('public'))// buat nyimpen foto

app.get('/',(req,res)=>{
    return res.status(200).send('API MovieIndoXXI')
})

const {movieRouter}=require('./routers')

app.use('/movie',movieRouter)

app.listen(PORT,()=>console.log(`aktif di port ${PORT}`))

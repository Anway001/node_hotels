const mongoose = require('mongoose')

const mongooseURL='mongodb://localhost:27017/hotel' //database create hoga  with name hotel //

// setup mongodb connection //
mongoose.connect(mongooseURL)

const db = mongoose.connection

db.on ('connected',()=>{
    console.log("connection establised by monogodb")
})
db.on ('error',()=>{
    console.log("connection failed by monogodb",err)
})
db.on ('disconnected',()=>{
    console.log("connection disconnected by monogodb")
})

module.exports=db   
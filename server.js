const express = require('express')
const app = express()
const db = require('./db')

const router=express.Router()

const bodyParser=require('body-parser')

app.use(bodyParser.json())// req.body //

const personRoutes = require('./routes/personRoutes')
const menuRoutes = require('./routes/menuRoutes')

app.use('/person',personRoutes)
app.use('/menu',menuRoutes)


// body parser is used to parse the incoming request bodies in a middleware before your handlers, available under the req.body property.//



app.get('/', function (req, res) {
  res.send('This is my backend .')
})

app.listen(3000,()=>{
    console.log('sever is running on port 3000!')
})

//testing for git hub //


// var notes = require('./notes.js')
// console.log ("hoja bhi ")

// console.log(notes.add(6,9))



// var fs = require('fs')
// var os = require('os')

// var user = os.userInfo
// console.log(user.username)


// fs.appendFile('greeting.txt','HI anway',()=>{
//     console.log("nice ")
// })







// function add (a,b){
//     return a+b
// }



// var add = (a,b)=>a+b
// var res =add (4,9)
// console.log(res)


// function add(a,b,anway,addi) {
//     console.log("ans "+ a+b)// fn gets completed 
//     anway() //call back fn 
//     addi ()// call back fn 
// }

// add (86 ,25,()=>console.log("complete hogaya bhai "),()=>console.log("ye last hai bhai !"))
const express = require('express')
const path = require ('path')
const students= require ('./students')
const sayHi = require ('./sayHi')

const app = express()

app.use(express.static(path.join(__dirname,'public')))


app.use(sayHi)


app.get('/students',(req,res)=>{
    res.json(students)
})

app.get('/students:id',(req,res)=>{
    let student= students.filter (student => students.id ===parseInt(req.params.id))
    if (student.length === 0 ) {
        res.json({msg :"there's no user with this ID :"  + req.params.id})
    } else{
    res.json(student)
    }
})

app.listen(5000 , (err)=> {
    if (err) {
        throw err
    } else {
        console.log("SERVER IS RUNNING ...")
    }
})
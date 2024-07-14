const express = require('express');
const router = express.Router();
const menu = require('./../modules/menu');


router.get('/',async(req,res)=>{
    try {
        const data = await menu.find()
        console.log("data fetch !")
        res.status(200).json(data)
        
    } catch (err) {
        console.log(err)
        res.status(400).json({error:"Internal error "})
        
    }
})

router.post('/',async(req,res)=>{
    try{
        const newdata =req.body 

        const newPerson = new menu(newdata)

        const newresponse = await newPerson.save()

        console.log("data saved")

        res.status(200).json(newresponse)
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:'Internal error.'})
    }
})

router.put('/:id',async(req,res)=>{
    try{
        const id = req.params.id 
        const updatedMenu = req.body
        const response = await menu.findByIdAndUpdate(id,updatedMenu,{
            new:true,
            runValidators:true
        })
        console.log("data updated")
        res.status(200).json(response)

        if (!response) {
            res.status(404).json({error:'No such menu found'})
        }

    }catch(err){
        console.log(err)
        res.status(400).json({error:'Internal error.'})
    }
})

router.delete('/:id',async(req,res)=>{
    try{
        const id = req.params.id

        const response = await menu.findByIdAndDelete(id)
        console.log("data deleted")
        res.status(200).json({message:"Menu deleted successfully"})

        if (!response){
            res.status(404).json({error:'No such menu found'})
        }
    }catch(err){
        console.log(err)
        res.status(400).json({error:'Internal error.'})
    }
})
module.exports = router;
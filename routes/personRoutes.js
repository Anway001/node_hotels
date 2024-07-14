const express = require('express');
const router = express.Router();
const person=require('./../modules/Person')



router.post('/',async(req,res)=>{
    try{
        const data =req.body //data lia body parser se and store kia in body //

        const newPerson = new person(data)//newPerson me sara data store kia

        const response = await newPerson.save() //newPerson ka data dat base me save kia !//
        console.log("data saved")
        res.status(200).json(response)
    }
    catch(err){
        console.log(err)
        res.status(400).json({error:'Internal error.'})
    }
})

router.get('/',async(req,res)=>{
    try{
    const data = await person.find()
    console.log('data fetched!')
    res.status(200).json(data)
    }catch(err){
        console.log(err)
        res.status(400).json({error:'Internal error.'})
    }
})


router.get('/:work',async(req,res)=>{
    try{
     const workList =req.params.work 
     if (workList == 'chief' || workList == 'manager' || workList == 'waiter'){
        
         const response = await person.find({work:workList})
         console.log("data fetched")
         res.status(200).json(response)
     }else{
         res.status(400).json({error:'Invalid work type.'})
     }
    }catch(err){
     console.log(err)
     res.status(400).json({error:'Internal error.'})
    }
 })

 
router.put('/:id',async(req,res)=>{
    try {
      const personid = req.params.id
      const updatedPerson = req.body
  
      const response=await  person.findByIdAndUpdate(personid,updatedPerson,{
        new :true, //Return the new updated document instead of the old one
        runValidators:true // run mongoose validators before updating.
      })
      console.log("data updated")
      res.status(200).json(response)
  
      if (!response) {
        res.status(404).json({error:'Person not found.'})
      }
  
  
    } catch (err) {
      console.log(err)
       res.status(400).json({error:'Internal error.'})
    }
  })

router.delete('/:id', async(req,res)=>{
    try{
        const personid = req.params.id
        const response = await person.findByIdAndDelete(personid)
        console.log("data deleted")
        res.status(200).json({Message:'Person deleted successfully.'})

        if (!response) {
            res.status(404).json({error:'Person not found.'})
          }
    }catch(err){
        console.log(err)
        res.status(400).json({error:'Internal error.'})
    }
     
   
})
    

 module.exports= router
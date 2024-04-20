import express from 'express'

import { user } from '../models/models.js';


const router =express.Router();
router.post('/',async(request,response)=>{
    try {
        if(
            !request.body.firstname ||
            !request.body.lastname ||
            !request.body.email ||
            !request.body.password
        ){
            return response.status(400).send({message:"Please Fill All the Fields"})

        }

        const newUser={
            firstname:request.body.firstname,
            lastname:request.body.lastname,
            email:request.body.email,
            password:request.body.password

        }
        const userN= await user.create(newUser);
        return response.status(201).send(userN)

        
    } catch (error) {
        console.log(error.messsage);
        response.status(500).send({message:error.message})

    }
    

 })

 //get request

router.get('/',async(request,response)=>{
    try {
        const users=await user.find({});
        return response.status(200).json({
            count:users.length,
            data:users
        })
        
    } catch (error) {
        return response.status(500).send({message:error.message})
    }
 })
// get by id
router.get('/:id',async(request,response)=>{
    try {
        const {id}= request.params;
        const users=await user.findOne({'_id':`${id}`});
        return response.status(200).json(users);
        
    } catch (error) {
        return response.status(500).send({message:error.message})
    } 
 })

 // update

router.put('/:id',async(request,response)=>{

    try {
        if(
            !request.body.firstname ||
            !request.body.lastname ||
            !request.body.email ||
            !request.body.password
        ){
            return response.status(400).send({message:"Please Fill All the Fields"})
        }
        const {id}= request.params;
        const result= await user.findByIdAndUpdate(id,request.body);
        if(!result) {
            return response.status(500).send({message:"not found"})

        }return response.status(200).send({message:"successful"})


        
        
    } catch (error) {
        return response.status(500).send({message:error.message});
        
    }
})

router.delete('/:id',async (request, response) => {
    const {id}= request.params;
        const result=await user.deleteOne({'_id':`${id}`});
        return response.status(200).json("deleted");

  });

export default router;
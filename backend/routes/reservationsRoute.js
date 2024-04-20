import express from 'express'
import { reservation} from '../models/models.js';


const router =express.Router();
router.post('/',async(request,response)=>{
    try {
        if(
            !request.body.reservedDate ||
            !request.body.bookingDate ||
            !request.body.time ||
            !request.body.partySize
        ){
            return response.status(201).send({message:"Please Fill All the Fields"})

        }

        const newReservation={
            reservedDate:request.body.reservedDate,
            customerID:request.body.customerID,
            bookingDate:request.body.bookingDate,
            time:request.body.time,
            partySize:request.body.partySize,
            tableId:request.body.tableId

        }
        const reservationN= await reservation.create(newReservation);
        return response.status(201).send(reservationN)

        
    } catch (error) {
        console.log(error.messsage);
        response.status(500).send({message:error.message})

    }
    

 })


router.get('/',async(request,response)=>{
    try {
        const reservations=await reservation.find({});
        return response.status(200).json({
            count:reservations.length,
            data:reservations
        })
        
    } catch (error) {
        return response.status(500).send({message:error.message})
    }
 })
// get by customer id
router.get('/customer/:id',async(request,response)=>{
    try {
        const {id}= request.params;
        const reservations=await reservation.find({'customerID':`${id}`});
        return response.status(200).json(reservations);
        
    } catch (error) {
        return response.status(500).send({message:error.message})
    } 
 })

 router.get('/:id',async(request,response)=>{
    try {
        const {id}= request.params;
        const reservations=await reservation.find({'_id':`${id}`});
        return response.status(200).json(reservations);
        
    } catch (error) {
        return response.status(500).send({message:error.message})
    } 
 })

 router.get('/edit/:id',async(request,response)=>{
    try {
        const {id}= request.params;
        const reservations=await reservation.find({'_id':`${id}`});
        return response.status(200).json(reservations);
        
    } catch (error) {
        return response.status(500).send({message:error.message})
    } 
 })
 // update by reservation iD

router.put('/:id',async(request,response)=>{

    try {
        if(
            !request.body.reservedDate ||
            !request.body.bookingDate ||
            !request.body.time ||
            !request.body.partySize
        ){
            return response.status(400).send({message:"Please Fill All the Fields"})
        }
        const {id}= request.params;
        const result= await reservation.findByIdAndUpdate(id,request.body);
        if(!result) {
            return response.status(500).send({message:"not found"})

        }return response.status(200).send({message:"successful"})


        
        
    } catch (error) {
        return response.status(500).send({message:error.message});
        
    }
})

router.delete('/:id',async (request, response) => {
    const {id}= request.params;
        const result=await reservation.deleteOne({'_id':`${id}`});
        return response.status(200).json("deleted");

  });

export default router;
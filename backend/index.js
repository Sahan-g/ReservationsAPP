
import {PORT,mongodbURL} from './config.js';
import mongoose from 'mongoose';
import express, { request } from 'express'
import{user} from './models/models.js'
import usersRoute from './routes/usersRoute.js'
import cors from 'cors';
import reservationsRoute from './routes/reservationsRoute.js';
import cookieParser from 'cookie-parser';
import authRoute from './routes/AuthRoute.js'

const app= express();
app.use(express.json())

app.use(cors({
    origin: ["http://localhost:5173"],
    methods: ["GET", "POST", "PUT", "DELETE"],
    credentials: true,
  }));



//post request 

app.use('/users',usersRoute);
app.use('/reservations',reservationsRoute);
app.use(cookieParser());
app.use("/", authRoute);



mongoose.connect(mongodbURL).then(()=>{
    console.log("database connected");
    app.listen(PORT,()=>{
    console.log(`application is listening to port ${PORT}`);
    app.get('/',(request,response)=>{
        console.log(request)
        return response.status(234).send("Testing get request")
    })

})

}).catch((error)=>{console.log(error)})
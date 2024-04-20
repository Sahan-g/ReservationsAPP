import mongoose from "mongoose";
import bcrypt from 'bcryptjs';

const reservationSchema=mongoose.Schema({
    customerID:{type:String,required:true},
    reservedDate:{
        type:String,
        required:true
    },bookingDate:{
        type:String,
        required:true
    },
    time:{type:String,
    required:true},
    partySize:{type:Number,required:true},
    confrimation:{type:String,required:false},
    tableId:{type:Number,required:false}

})

const userSchema=mongoose.Schema({ 
    
    
    firstname:{type:String,required:true},
    lastname:{type:String,require:true},
    email:{type:String,required:true}
    ,password:{type:String,required:true},
    isAdmin:{type:Boolean,required:true,default:false}
})

userSchema.pre("save", async function () {
    this.password = await bcrypt.hash(this.password, 12);
  });

export const reservation = mongoose.model('reservation',reservationSchema);
export const user = mongoose.model('user',userSchema);
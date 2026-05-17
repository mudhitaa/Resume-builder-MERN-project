import mongoose from "mongoose";

const UserSchema = new mongoose.Schema({
    username:{
        type: String,
        min: 2,
        max:50,
        required: true,
        index:true,
    },
    email:{
        type: String,
        required: true,
        unique:true,
    },

    password:{
        type: String,
        required: true,
    },

},{
    //db table options
    timestamps: true,  //created at / updated at
    autoCreate:true,
    autoIndex:true,
})



const UserModel = mongoose.model("User",UserSchema)

export default UserModel

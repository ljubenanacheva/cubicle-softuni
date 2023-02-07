const mongoose=require('mongoose');

const accessoryShcema=new mongoose.Schema({
    name:{
        type:String,
        required:true,
    },
    imageUrl:{
        type:String,
        required:true,
        match:[/^https?:\/\//,'Invalid Url.'],
    },
    description:{
        type:String,
        required:true,
        maxLength:50
    }
});

const Accessory=mongoose.model('Accessory',accessoryShcema);

module.exports=Accessory;
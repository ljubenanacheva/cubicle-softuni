const router=require('express').Router();
const Accessory=require('../models/Accessory.js');

router.get('/create', (req,res)=>{
    res.render('accessory/create');
});

router.post('/create',async (req,res)=>{
    const {name, description,imageUrl}=req.body;
    try{
        await Accessory.create({name, description,imageUrl});
    }catch(err){
        console.log(err);
        return res.redirect('/404');
    }
    res.redirect('/');
});

module.exports=router;
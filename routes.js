const express= require('express');
const { BTC } = require("./model");

const btcRouter = express.Router()

btcRouter.get("/",async(req,res)=>{
    try {
        const btc = await BTC.find();
        res.status(200).json({msg:"Success",btc});
      } catch (error) {
        console.error('Error fetching bitcoins:', error);
        res.status(500).json({ error: 'An error occurred while fetching bitcoins' });
      }
})

btcRouter.post("/",async(req,res)=>{
   const {tokenName ,symbol,img,decimals,marketcap,chain } = req.body;
   try{
   const btc= new BTC({ tokenName,symbol,img,decimals,chain,marketcap})
   await btc.save()
   res.status(200).json({msg:"A new doctor has been added"})
   }catch{
       res.status(500).json({msg:"Error saving doctor"})

   }
})
module.exports = btcRouter
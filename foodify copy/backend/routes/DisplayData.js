const express= require('express')
const router = express.Router()

router.post('/foodData',async(req,res)=>{
    try {
        res.send([global.fooditems,global.foodcat])
        
    } catch (error) {
        console.error(error.massage)
        res.send("server error")
    }

})
module.exports=router
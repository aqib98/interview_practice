/**
 * Module Dependencies
 */

 let express = require('express')
 let router = express.Router()

 router.delete('',(req,res)=>{
     res.status = 200
     res.json({
         message:'Success'
     })
 })

module.exports = router
 
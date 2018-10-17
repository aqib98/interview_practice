/**
 * Module Dependencies
 */

 let express = require('express')
 let router = express.Router()

 /**
  * Update one parameter
  */
 router.patch('',(req,res)=>{
     res.status = 200
     res.json({
         message:'Success'
     })
 })

 /**
  * Update the whole record
  */
 router.put('',(req,res)=>{
    res.status = 200
    res.json({
        message:'Success'
    })
})

module.exports = router
 
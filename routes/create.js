/**
 * Module Dependencies
 */

let express = require('express')
let router = express.Router()
let lib = require('../lib/data')

router.post('/',(req,res)=>{
    
   let id = (typeof(req.body.id) !== undefined && Number(req.body.id) !== NaN ) ? req.body.id : false
   let category = (typeof(req.body.category) !== undefined && typeof(req.body.category) === 'string' ) ? req.body.category :  false
   let date = (typeof(req.body.date) !== undefined && typeof(req.body.date) === 'string' ) ? req.body.date :  false
   let isFileAlreadyExisting = lib.getAllFileNames().every((record)=>{
        return !(record===`${id.toString()}.json`)
   })
   
   if(id && category && date && isFileAlreadyExisting){
        let data = {
            id,
            category,
            date
        }
        lib.create(id.toString(),data).then((msg)=>{
            res.status(200).json({
                message : 'Created record successfully'
            })
        }).catch((err)=>{
            res.status(500).json({
                message : 'Internal server error'
            })
        })

   }else{
       res.status(400).json(()=>{
        if(isFileAlreadyExisting){
            return {
                message : 'A file name already exists with that name'
            }
        }else{
            return {
                message : 'Server did not understand the request'
            }
        }
       })
       
   }

    
})

module.exports = router


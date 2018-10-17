/**
 * Module dependencies
 */

 let express = require('express')
 let bodyParser = require('body-parser')
 let http = require('http')
 let deleteRecordRoute = require('./routes/delete')
 let updateRecordRoute = require('./routes/update')
 let createRecordRoute = require('./routes/create')
 let getRecordsRoute = require('./routes/get')


 let app = express()

 app.use(bodyParser.json())
 app.use(bodyParser.urlencoded({extended:true}))

 /**
  * Delete a record
  */
 app.use('/information',deleteRecordRoute)

/**
 * Create a record
 */
app.use('/information',createRecordRoute)

/**
 * Update record 
 */
app.use('/information',updateRecordRoute)

/**
 * Get records
 */
app.use('/information',getRecordsRoute)
 

 /**
  * Catch 404 errors
  */
 app.use((req,res,next)=>{
     let err = new Error('Not Fount')
     err.status = 404
     next(err)
 })

 /**
  * Error handlers
  */

 app.use((err,req,res,next)=>{
     res.status = (err.status || 500)
     res.send({
         message : 'Internal Server Error'
     })
 })

 http.createServer(app).listen(3001,()=>{
     console.log('app listening on 3001')
 })

 

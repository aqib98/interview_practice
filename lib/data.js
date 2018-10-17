/**
 * Module dependencies
 */

let fs = require('fs')
let path = require('path')

let lib = {}

lib.baseDir = path.join(__dirname,'/../.data/')

lib.create = (file,data)=>{
    console.log('into create')
    console.log(file,data)
    return new Promise((resolve,reject)=>{
        console.log('into promise')
        
            fs.open(lib.baseDir+'/'+file+'.json','wx',(err,fd)=>{
                if(err){
                 reject(err)
                }else{
                    let srtingData = JSON.stringify(data)
                    fs.writeFile(fd,srtingData,(err)=>{
                        if(err){
                            reject(err)
                        }else{
                            fs.close(fd,(err)=>{
                                if(err){
                                    reject(err)
                                }else{
                                    resolve('Record created')
                                }
                            })
                        }
                    })
                }
            })
       
        
    })
}

lib.getAllFileNames = () => {
    return fs.readdirSync(lib.baseDir)
}

module.exports = lib


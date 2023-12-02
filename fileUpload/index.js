const express = require('express');
const multer = require('multer')

const app = express();
const port = 2222;

const uploadFile = multer({
    storage: multer.diskStorage({
        destination: function(req,file,callback){
            callback(null,"uploads")
        },
        filename: function (req,file,callback){
            callback(null,file.filename + "-" + Date.now() + ".jpg")
        }
    })
}).single("user_file")

app.post('/upload',uploadFile,(req,res)=>{
   res.send("File uploaded successfully");
})

app.listen(port,()=>{
    console.warn(`server is running on ${port}`)
})
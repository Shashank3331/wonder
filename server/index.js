const express = require('express');
const cors = require('cors');
const bodyParser = require('body-parser');
const mongoose = require('mongoose')

connectivity().catch(err=> console.log(err))
async function connectivity(){
    await mongoose.connect('mongodb://127.0.0.1:27017/e-comm')
    console.log("Database Connected");
}
const userSchema = new mongoose.Schema({
    username: String,
    password: String
})

const User = mongoose.model('NewUser',userSchema)

const app = express();
const port = 3305;
app.use(cors());
app.use(bodyParser.json());

app.post('/index',(req,res)=>{
    //  res.send('Hello world');
    // console.log(req.body);
    // res.json(req.body);
    let user = new User();
     user.username = req.body.username;
     user.password = req.body.password;
     const document = user.save()
     console.log(document)
     console.log(req.body)
     res.json(document)
})

app.get('/data',async(req,res)=>{
    const docs = await User.find({})
    res.json(docs);

})

app.listen(port,()=>{
    console.log(`Server is running on ${port}`);
})
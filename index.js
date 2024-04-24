const express =require('express');
const cors=require('cors');
const app=express();
const port=process.env.PORT || 5000;
app.use(cors());
app.use(express.json())
const users=[
    {id:1,name:'Sifat',email:'sifat@gmail.com'},
    {id:2,name:'tanvir',email:'tanvir@gmail.com'},
    {id:3,name:'ahmmed',email:'ahmmed@gmail.com'}
]
app.get('/', (req, res) =>{
    res.send('Users Management Server Running');
})
app.get('/users',(req,res)=>{
    res.send(users)
})
app.post('/users',(req,res)=>{
    console.log('post API hitting');
    console.log(req.body);
    const newUser=req.body;
    newUser.id=users.length+1;
    users.push(newUser);
    res.send(newUser);
})
app.listen(port,()=>{
    console.log(`Server is Running on port :${port}`);
});
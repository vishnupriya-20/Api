var express=require('express')
var router=express.Router();
var service=require('../services/userservice')

router.post('/',(req,res,next)=>{
    console.log("expleo");
    service.saveUser(req.body,(err,data)=>{
        if(!err)
        {
            console.log(data);
            res.json(data);
        }

        else{
            console.log(err);
            res.json(err);
        }
    })
})

router.get('/',(req,res,next)=>
{
    service.getUsers((err,data)=>{
        if(!err)
        {
            console.log(data);
            res.json(data);
        }
        else{
            console.log(err);
            res.json(err);
        }
    })
})

router.get('/:id',(req,res,next)=>
{
    service.getUserById(req.params.id,(err,data)=>{
        if(!err)
        {
            console.log(data);
            res.json(data);
        }
        else{
            console.log(err);
            res.json(err);
        }
    })
})

router.put('/:id',(req,res,next)=>
{
    service.update(req.params.id,req.body,(err,data)=>{
        if(!err)
        {
            console.log(data);
            res.json(data);
        }
        else{
            console.log(err);
            res.json(err);
        }
    })
})

router.delete('/:id',(req,res,next)=>
{
    service.delete(req.params.id,(err,data)=>{
        if(!err)
        {
            console.log(data);
            res.json(data);
        }
        else{
           
            res.json(err);
        }
    })
})

router.post('/delete', (req,res) => {
    console.log('body', req.body)
    service.deleteuser(req.body,(err, data) {
        if(!err) {
            var status = {
                info: 'user deleted',
                doc: data
            }
            res.json(status);
        }
        else {
            res.json(err);
        }
    })
})


module.exports=router;
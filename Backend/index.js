const express = require("express");
const { createTodo, updateTodo } = require("./types");
const { todo } = require("./db");
const app = express();

app.use(express.json());

app.post('/todo' , async function(req,res){

    const payLoad = req.body;
    const parsedPayload = createTodo.safeParse(payLoad)

    if (!parsedPayload.success){
        res.status(411).json({
            msg : "You gave the wrong Input!"
        })
        return;
    }
    await todo.create({
        title : payLoad.title,
        description : payLoad.description,
        completed : false
    })
    res.json({
        msg : "To do created"
    })
});

app.get('/todos' , async function(req,res){
    const response = await todo.find({}); //{} means give me everything,no filters
    res.json({
        msg : response
    })
});

app.put('/completed' , async function(req,res){
    const pay = req.body;
    const updatePayload = updateTodo.safeParse(pay);

    if (!updatePayload){
        res.status(411).json({
            msg : "You gave the wrong Input!"
        })
        return;
    }
    await todo.update({ _id : req.body.id} , {completed : true})
});

app.listen(3000);
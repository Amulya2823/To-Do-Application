//contains all the zod input validation 

const zod = require("zod");

//const title = zod.title.string();
//const description = zod.description.string();
//const id = zod.id.string();

const createTodo = zod.object({

    title : zod.string(),
    description : zod.string(),

});

const updateTodo = zod.object({
    id : zod.string()
});

module.exports = {
    createTodo : createTodo,
    updateTodo : updateTodo
}
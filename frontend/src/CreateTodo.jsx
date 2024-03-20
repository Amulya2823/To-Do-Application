import { useState } from "react";

export const CreateTodo =  function(){

    const [ title , setTitle] = useState("");
    const [ description , setdescription] = useState("");

    return <div>
        <input type="text" placeholder="Title" 
        style = {{padding : 10 , margin :10}}
        onChange={ (e) => {
            
            setTitle(e.target.value)
        }}>
        </input><br></br>

        <input type="text" placeholder="Description" 
        style = {{padding : 10 , margin :10}}
        onChange={ (e) => {
           
            setdescription(e.target.value)
        }}>
        </input><br></br>

        <button style = {{padding : 10 , margin :10}} 
        onClick={() => {
            fetch("http://localhost:3000/todo" , {
                method : "POST",
                body : JSON.stringify({
                    title : title,
                    description : description
                }),
                headers : {
                    "Content-type" : "application/json"
                }

            })
            .then( async (res) => {
                const json = await res.json();
                alert("Todo Added")
        })
        }}
        >Add Todo</button>
    </div>
}
export function CreateTodo(){
    return <div>
        <input style = {{padding : 10 , margin : 10}}
        type="text" placeholder="Title"></input><br></br>
        <input style = {{padding : 10 , margin : 10}}
        type="text" placeholder="Description"></input><br></br><br></br>
        <button>Add a Todo</button>
    </div>
} 
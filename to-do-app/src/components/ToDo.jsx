import { useState } from "react";

import Form from "./Form";
import ToDoList from "./ToDoList";

export default function ToDo(){
    const [toDos, SettoDos] = useState([]);
    return(
    <div>
        <Form toDos={toDos} SettoDos={SettoDos}/>
        <ToDoList toDos={toDos}/>
       
    </div>
    );
}
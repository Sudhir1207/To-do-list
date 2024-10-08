import { useState } from "react";

import Form from "./Form";
import ToDoList from "./ToDoList";
import Footer from "./Footer";

export default function ToDo(){
    const [toDos, SettoDos] = useState([]);
    const completedArray = toDos.filter((todo)=>todo.done).length;
    const totalToDos = toDos.length;
    return(
    <div>
        <Form toDos={toDos} SettoDos={SettoDos}/>
        <ToDoList toDos={toDos} SettoDos={SettoDos}/>
        <Footer completedArray={completedArray} totalToDos={totalToDos}/>
       
    </div>
    );
}
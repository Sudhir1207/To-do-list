import { useState } from "react";
import Items from "./Items";

export default function ToDo(){

    const [Item, setItem] = useState("");
    const [toDos, SettoDos] = useState([]);

    function handleSub(e){
        e.preventDefault();
        SettoDos([...toDos, Item]);
        setItem("");
    }


    return(
    <div>
        <form onSubmit={(e)=>handleSub(e)}>
            <input
                onChange={(e)=>setItem(e.target.value)}
                type="text"
                value={Item}
            />
            <button type="submit">Add</button>
        </form>
        {toDos.map((item)=>(<Items key={item} item={item}/>))}
       
    </div>
    );
}
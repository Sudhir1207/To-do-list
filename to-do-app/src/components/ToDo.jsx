import { useState } from "react";

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
        {toDos.map((item)=>
        (<h3>{item}</h3>)
        )}
    </div>
    );
}
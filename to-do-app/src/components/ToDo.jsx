import { useState } from "react";

export default function ToDo(){

    const [Item, setItem] = useState("");

    function handleSub(e){
        e.preventDefault();
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
    </div>
    );
}
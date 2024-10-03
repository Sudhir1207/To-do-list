import { useState } from "react";
import styles from "./form.module.css";
export default function Form({toDos, SettoDos}){
    const [Item, setItem] = useState("");
    
    function handleSub(e){
        e.preventDefault();
        SettoDos([...toDos, Item]);
        setItem("");
    }
    return (
        <form className={styles.todoform} onSubmit={(e)=>handleSub(e)}>
        <div className={styles.inputContainer}>
        <input
                className={styles.modernInput}
                onChange={(e)=>setItem(e.target.value)}
                type="text"
                value={Item}
                placeholder="Enter your task"
            />
            <button className={styles.modernButton} type="submit">Add</button>

        </div>   
        </form>

    );
}
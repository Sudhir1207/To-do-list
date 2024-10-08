import { useState } from "react";
import styles from "./form.module.css";
export default function Form({toDos, SettoDos}){
    const [Item, setItem] = useState({name: "", done: false});
    
    function handleSub(e){
        e.preventDefault();
        SettoDos([...toDos, Item]);
        setItem({name: "", done: false});
    }
    return (
        <form className={styles.todoform} onSubmit={(e)=>handleSub(e)}>
        <div className={styles.inputContainer}>
        <input
                className={styles.modernInput}
                onChange={(e)=>setItem({name:e.target.value, done: false})}
                type="text"
                value={Item.name}
                placeholder="Enter your task"
            />
            <button className={styles.modernButton} type="submit">Add</button>

        </div>   
        </form>

    );
}
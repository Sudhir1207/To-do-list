import Items from "./Items";
import styles from "./toDostyle.module.css"
export default function ToDoList({toDos}){
    return (
        <div className={styles.list}>
            {toDos.map((item)=>(<Items key={item} item={item}/>))}
        </div>
    )
}
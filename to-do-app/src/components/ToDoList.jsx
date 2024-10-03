import Items from "./Items";
import styles from "./toDostyle.module.css"
export default function ToDoList({toDos}){
    // console.log(toDos.length);
    return (
        <div className={toDos.length ? styles.list : ""}>
            {toDos.map((item)=>(<Items key={item} item={item}/>))}
        </div>
    )
}
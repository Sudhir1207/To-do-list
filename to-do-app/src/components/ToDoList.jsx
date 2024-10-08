import Items from "./Items";
import styles from "./toDostyle.module.css"
export default function ToDoList({toDos, SettoDos}){
    // console.log(toDos.length);
    const sortedTodos = toDos.slice().sort((a,b)=>Number(a.done)- Number(b.done));
    return (
        <div className={toDos.length ? styles.list : ""}>
            {sortedTodos.map((item)=>(
                <Items key={item.name} item={item} toDos={toDos} SettoDos={SettoDos}/>
                ))}
        </div>
    )
}
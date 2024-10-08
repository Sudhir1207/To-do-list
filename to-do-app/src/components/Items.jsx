import styles from "./toDoItemDes.module.css"
export default function Items({item, toDos, SettoDos }) {
    function handleDelete(item){
        console.log("item deleted: ", item); 
        SettoDos(toDos.filter((todo)=> todo !== item));
    }

    function handleClick(item){
        const newArray = toDos.map((todo)=>todo.name === item.name ? {...todo, done: !todo.done}: todo);
        SettoDos(newArray);
        console.log(toDos);
    }

    const strike = item.done ? styles.completed : "";
    return (
        <div>
            <div className={styles.It_comp}>
            <h3 className={styles.It_style}>
            <span className={strike} onClick={()=>handleClick(item)}>{item.name}</span>
            <span>
                <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>Delete</button>
            </span>
            </h3>
            
            <hr className={styles.line}/>
            
            </div>
        </div>
        
    );
}
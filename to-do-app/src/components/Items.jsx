import styles from "./toDoItemDes.module.css"
export default function Items({item, toDos, SettoDos }) {
    function handleDelete(item){
        console.log("item deleted: ", item); 
        SettoDos(toDos.filter((todo)=> todo !== item));
        

    }
    return (
        <div>
            <div className={styles.It_comp}>
            <h3 className={styles.It_style}>{item}
            <span>
                <button onClick={()=>handleDelete(item)} className={styles.deleteButton}>Delete</button>
            </span>
            </h3>
            
            <hr className={styles.line}/>
            
            </div>
        </div>
        
    );
}
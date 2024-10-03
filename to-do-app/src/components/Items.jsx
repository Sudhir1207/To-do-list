import styles from "./toDoItemDes.module.css"
export default function Items({item}) {
    return (
        <div>
            <div className={styles.It_comp}>
            <h3 className={styles.It_style}>{item}
            <span>
                <button className={styles.deleteButton}>Delete</button>
            </span>
            </h3>
            
            <hr className={styles.line}/>
            
            </div>
        </div>
        
    );
}
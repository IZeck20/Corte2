import { useState } from "react"
import styles from "./AddCategory.module.css"

const AddCategory = ({onAddCategory}) => {
    const [category, setCategory] = useState('')

    const onSubmit=(e)=>{
        e.preventDefault();
        onAddCategory(category)
        setCategory('')
    }
    return (
        <form onSubmit={(event)=> onSubmit(event)}>
            <p className={styles.desc}>Escriba la categoria que desea buscar y presione enter.</p>
            <input className={styles.input} type="text" value={category} onChange={(event) => setCategory(event.target.value)}></input>
        </form>
    )

} 

export default AddCategory;
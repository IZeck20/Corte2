import { useFetchGifs } from "../../hooks/useFetchGifs";
import GifItem from "../GifItem/GifItem";
import styles from "./GifGrid.module.css"

const GifGrid = ({category}) => {
    const {images, isLoading} = useFetchGifs(category)
    return (
        <>
            <p className={styles.category}>{category}</p>
            <div className={styles.scrollable_container}>
                <div className={styles.card_grid}>
                    {
                        images.map((image, key) => {
                            return <GifItem key={key} {...image}/>
                        })
                    }
                </div>
            </div>
        </>
    )

}

export default GifGrid;
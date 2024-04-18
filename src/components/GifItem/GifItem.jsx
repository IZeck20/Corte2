import styles from "./GifItem.module.css"

const GifItem = (props) => {
    console.log(props)
    const {url, title} = props;
    return (
        <>
            <div className={styles.container}>
                <div className={styles.data_container}>
                    <img className={styles.image} src={url} alt="gif"/>
                    <p className={styles.title}>{title}</p>
                </div>
                <img className={styles.background} src={url} alt="gif" />

            </div>
        </>
    )

}

export default GifItem;
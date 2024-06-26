export const getGifs = async(category) => {
    const url = `https://api.giphy.com/v1/gifs/search?api_key=GDjgCNDyFuf8NVaFH6LeUTUyqEvLYuY3&q=${category}&limit=25&offset=0&rating=g&lang=en&bundle=messaging_non_clips`
    const resp = await fetch(url)
    const {data} = await resp.json()
    console.log(data);
    const gifs = data.map(img => {
        return {
            id: img.id,
            title: img.title,
            url: img.images.fixed_height.url
        }
    })

    return gifs
}
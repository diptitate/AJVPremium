const url = `https://api.cloudinary.com/v1_1/dsmmllwgk/image/upload`


const uploadImage = async(image) => {
    const formData = new FormData()
    formData.append("file",image)
    formData.append("upload_preset", "ajvprivatelimited")

    const dataResponse = await fetch(url, {
        method : 'post',
        body : formData
    })

    return dataResponse.json()
    {/*-----------
    
    

    
formData.append("upload_preset","ajvwebapp")
    
    -----*/}
    
}
export default uploadImage


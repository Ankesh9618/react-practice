function ProfilePicture(){

    const imageUrl = './src/assets/download.png';

    const eventHandler = (e)=> {
        if (e.target.style.visibility == "hidden"){
            e.target.style.visibility = "visible";
        }else{e.target.style.visibility = "hidden"}
    };

    return(
        <img onClick={(e)=>eventHandler(e)} src={imageUrl} />
    )
}

export default ProfilePicture;
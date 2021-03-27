import React, { useContext, useEffect, useState } from 'react'
import './Dashboard.css'
import  { UserContext } from '../context_api/user'
import ArrowDownwardIcon from '@material-ui/icons/ArrowDownward';
import firebaseApp from '../firebase.js'    
import { Link } from 'react-router-dom'

function Dashboard() {
    const [user , setUser] = useContext(UserContext)
    const [img , setImg] = useState()
    const [url, setUrl] = useState()
    const [uploading, setUploading] = useState(false)
    console.log(user)
    useEffect(() => {
        if(user.length == 0){
            var name = localStorage.getItem("Name");
            if(name != null){
                setUser({name : name})
            }
        }
    }, [])
    const handleSubmit = (e) =>{
        e.preventDefault()
        setUploading(true)
        const storage = firebaseApp.storage()
        storage.ref(`/images/${img.name}`).put(img).then(function(snapshot){
            console.log(snapshot)
            storage.ref().child(`/images/${img.name}`).getDownloadURL().then((url) =>{
                setUrl(url)
                firebaseApp.database().ref(`/users/${firebaseApp.auth().currentUser.uid}`).push({imgUrl : url , likes : 0})
                console.log(url)
                setUploading(false)
            })
        })
    }
    const handleImage = (e) =>{
        e.preventDefault()
        setImg(e.target.files[0])
    }
    return (
        <div className="dashboard">
            <div className="dashboard_container">
                <h1 className="dashboard_text">Hello {user.name}</h1>
                <h2 className="dashboard_text">Wanna upload any plant pic ?</h2>
                <ArrowDownwardIcon className="arrow_down" fontSize="large" />
                <form className="upload_form" onSubmit={(e) => handleSubmit(e)} >
                    <input onChange={(e) => handleImage(e)} className="dashboard_upload" required type="file"/>
                    <button type="submit" className="upload_button" >{ uploading ? "Uploading....." : "Submit" }</button>
                </form>
                {url ? <> <img className="dashboard_text"  style={{width:"50vh"}} src={url} alt="plant pic" /> <h2 className="dashboard_text">Submitted</h2> </> : <></> }
                <div className="go_back">
                    <Link to="/" className="link" ><div className="green_bg_button">Go to home</div></Link>
                    <Link to="/explore" className="link" ><div className="green_bg_button">Go to explore page</div> </Link>
                </div>
            </div>
        </div>
    )
}

export default Dashboard

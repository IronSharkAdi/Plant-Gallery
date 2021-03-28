import React, { useEffect , useContext, useState} from 'react'
import firebaseApp from '../firebase.js'
import {PlantContext  } from '../context_api/plants'
import './Explore.css'
import { Link } from 'react-router-dom'

function Explore() {
    const [plant , setPlant] = useContext(PlantContext)
    const [loading, setLoading] = useState(false)
    
    useEffect(() => {
        firebaseApp.database().ref("users/").orderByValue().on("value", function(data) {
            data.forEach(function(data) {
               var name = data.val().name
               firebaseApp.database().ref(`users/${data.key}`).orderByValue().on("value", function(data){
                data.forEach(function(data) {
                    var imageUrl = data.val().imgUrl
                    if(imageUrl != undefined){
                        var newPlant = {name : name , url : data.val().imgUrl}
                        setPlant(prevPlant => [...prevPlant , newPlant])
                        setLoading(true)
                    }
                })
               })
            });
            console.log(plant)
            plant.map(child =>{
                console.log(child)
            })
         });
         
    }, [])
    return (
        <>
        <div className="explore">
            <div className="explore_buttons">
                <Link to="/" className="link" ><div className="explore_button green_bg_button">Go to home</div></Link>
                <Link to="/explore" className="link" ><div className=" explore_button green_bg_button">Go to explore page</div> </Link>
            </div>
            <div className="explore_container">
                {loading ? 
                <>
                <PlantShowcase plants={plant} />
                <PlantShowcase plants={plant} />
                <PlantShowcase plants={plant} />
                </>
                : <h1 style={{color:"white"}} >Loading....</h1> }                                                                                           
            </div>
        </div>
        </>
    )
}

const PlantShowcase =  ({plants}) =>{
    return plants.map(child =>(
        <div className="explore_plant">
        <div className="explore_plant_container">
            <img className="plant_image" src={child.url} alt=""/>
            <h6 className="explore_plant_text">{child.name}</h6>
        </div>
        </div> 
    ))
} 

export default Explore

import React, { useEffect , useContext} from 'react'
import firebaseApp from '../firebase.js'
import {PlantContext  } from '../context_api/plants'

function Explore() {
    const [plant , setPlant] = useContext(PlantContext)

    useEffect(() => {
        firebaseApp.database().ref("users/").orderByValue().on("value", function(data) {
            data.forEach(function(data) {
               console.log("The " + data.key + " rating is " + data.val());
               console.log(data)
               console.log(data.key)
               console.log(data.val())
               var name = data.val().name
               firebaseApp.database().ref(`users/${data.key}`).orderByValue().on("value", function(data){
                data.forEach(function(data) {
                    console.log(data.key)
                    console.log(data.val().imgUrl)
                    var newPlant = {name : name , url : data.val().imgUrl}
                    setPlant(plant.push(newPlant))
                    console.log(newPlant)
                    console.log(plant)
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
        <div className="explore">
            <div className="explore_container">
                
            </div>
        </div>
    )
}

export default Explore

import React, { useContext, useEffect } from 'react'
import './Home.css'
import logo from '../img/logo.png'
import FavoriteIcon from '@material-ui/icons/Favorite';
import StarsIcon from '@material-ui/icons/Stars';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
import { Link } from 'react-router-dom'
import  { UserContext } from '../context_api/user'

function Home() {
    const [user , setUser] = useContext(UserContext)
    const mostLikedPlants =[
        {
            img : "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            alt : "plant",
            title : "Bacopa",
            owner : "Is"
        },
        {
            img : "https://i.pinimg.com/564x/61/23/c1/6123c10d0f4d446f685cf0efac0517c4.jpg",
            alt : "plant",
            title : "Annual Vinca",
            owner : "Sabil"
        },
        {
            img : "https://images.unsplash.com/photo-1585146595462-ea5901dce0cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            alt : "plant",
            title : "Balloon Flower",
            owner : "Arefin"
        },
        
        {
            img : "https://images.unsplash.com/photo-1613347931228-fcc2229f439a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt : "plant",
            title : "Beautybush",
            owner : "Mickey Mouse"
        },
    ]
    const mostFav =[
        {
            img : "https://images.pexels.com/photos/807598/pexels-photo-807598.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            alt : "plant",
            title : "Bacopa",
            owner : "Is"
        },
        {
            img : "https://images.pexels.com/photos/1266302/pexels-photo-1266302.jpeg?auto=compress&cs=tinysrgb&dpr=1&w=500",
            alt : "plant",
            title : "Annual Vinca",
            owner : "Sabil"
        },
        {
            img : "https://images.pexels.com/photos/1090972/pexels-photo-1090972.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            alt : "plant",
            title : "Balloon Flower",
            owner : "John"
        },
        
        {
            img : "https://images.pexels.com/photos/1408221/pexels-photo-1408221.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            alt : "plant",
            title : "Beautybush",
            owner : "Mickey Mouse"
        },
    ]
    useEffect(() => {
        if(user.length == 0){
            var name = localStorage.getItem("Name");
            if(name != null){
                setUser({name : name})
            }
        }
    }, [])
    console.log(user.length)
    return (
        <div className="Home">
            <div className="landing_page">
            <nav className="navbar">
                <div className="nav_items">  
                    <img src={logo} alt="plant logo" className="plant_logo nav_item"/>
                    <p className="nav_item">Gallery</p>
                </div>
                <div className="nav_items">
                    <p className="nav_item" > About</p>
                </div>
                <div className="nav_items">
                    {user.length == 0 ?<><Link to="/login" className="link" ><p className="nav_item">Login</p> </Link> 
                    <Link to="/register" className="link" > <p className="nav_item">Register</p> </Link></> : <h3 className="greeting">Hey {user.name}</h3>}
                    
                </div>
            </nav>
            <div className="headings">
                <header className="heading">Real , Beautiful plants at your eye sight</header>
                <h2 className="sub_heading" >Share , Upload , Watch</h2>
            </div>
            </div>
            {/*  */}
            <div className="plants_showcase"  >
                <div className="title">
                    <FavoriteIcon/>
                    <h1 className >Most Liked</h1>
                </div>
                <div className="plants">
                { mostLikedPlants.map(object =>{
                    return(
                        <>
                        <div className="plant">
                            <img className="plant_image" src={object.img} alt={object.alt}/>
                            <h6>{object.title}</h6>
                            <p>{object.owner}</p>

                        </div>
                        </>
                    )
                })}
                </div>
            </div>
            <div className="fav_plants_showcase"  >
                <div className="fav_title">
                    <StarsIcon style={{color:"grey"}}/>
                    <h1 className >Most Liked</h1>
                </div>
                <div className="fav_plants">
                { mostFav.map(object =>{
                    return(
                        <>
                        <div className="fav_plant">
                            <img className="fav_plant_image" src={object.img} alt={object.alt}/>
                            <h6>{object.title}</h6>
                            <p>{object.owner}</p>

                        </div>
                        </>
                    )
                })}
                </div>
            </div>
            <div className="ending">
                <img className="green_bg_left" src="https://images.pexels.com/photos/2826787/pexels-photo-2826787.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260" alt="Home Image"/>
                <div className="green_bg">
                    <h1>Wanna see more beautiful eye satisfying greeny pics or Share your greeny things ?</h1>
                    <div className="green_bg_explore" >Explore <ArrowForwardIcon/> </div>
                    <div className="green_bg_upload" >Upload <ArrowForwardIcon/> </div>
                </div>
            </div>
            <footer className="footer">
                <div className="footer_left">
                    <img src={logo} alt="plant logo" className="plant_logo nav_item"/>
                    <p className="nav_item">Plants Gallery</p>
                </div>
                <div className="footer_right">
                    <p>©2020 Iron Shark Adi</p>
                </div>
            </footer>
        </div>
    )
}

export default Home

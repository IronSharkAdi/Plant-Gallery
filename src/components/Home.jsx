import React from 'react'
import './Home.css'
import logo from '../img/logo.png'

function Home() {
    const plants =[
        {
            img : "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            alt : "plant"
        },
        {
            img : "https://i.pinimg.com/564x/61/23/c1/6123c10d0f4d446f685cf0efac0517c4.jpg",
            alt : "plant"
        },
        {
            img : "https://images.unsplash.com/photo-1585146595462-ea5901dce0cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            alt : "plant"
        },
        
        {
            img : "https://images.unsplash.com/photo-1613347931228-fcc2229f439a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt : "plant"
        },
        {
            img : "https://images.pexels.com/photos/5858235/pexels-photo-5858235.jpeg?auto=compress&cs=tinysrgb&dpr=2&h=750&w=1260",
            alt : "plant"
        },
        {
            img : "https://i.pinimg.com/564x/61/23/c1/6123c10d0f4d446f685cf0efac0517c4.jpg",
            alt : "plant"
        },
        {
            img : "https://images.unsplash.com/photo-1585146595462-ea5901dce0cc?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=634&q=80",
            alt : "plant"
        },
        
        {
            img : "https://images.unsplash.com/photo-1613347931228-fcc2229f439a?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=1350&q=80",
            alt : "plant"
        },
    ]
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
                    <p className="nav_item">Login</p>
                    <p className="nav_item">Register</p>
                </div>
            </nav>
            <div className="headings">
                <header className="heading">Real , Beautiful plants at your eye sight</header>
                <h2 className="sub_heading" >Share , Upload , Watch</h2>
            </div>
            </div>
            {/*  */}
            <div className="plants_showcase"  >
                {plants.map(object =>{
                    return(
                        <>
                        <div className="plants">
                            <img className="plant_image" src={object.img} alt={object.alt}/>
                        </div>
                        </>
                    )
                })}
            </div>
        </div>
    )
}

export default Home

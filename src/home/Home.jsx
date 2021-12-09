import React, { useState } from 'react'
import Contact from '../components/Contact';
import Footer from '../components/Footer';
import Header from '../components/Header';
import Project from '../components/Project';
import Sidebar from '../components/Sidebar';
import Topbar from '../components/Topbar'
import './style.scss'

function Home() {


    let [menuState, setMenuState] = useState(false);


    return (
        <>
        <Topbar menuState={menuState} setMenuState={setMenuState}/>
        <Sidebar menuState={menuState} setMenuState={setMenuState}/>
        <Header/>
        <Project/>
        <Contact/>
        <Footer/>
        </>
    )
}

export default Home

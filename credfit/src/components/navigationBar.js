import React from "react"
import navlogo from './credfitLogo.png';
import caplogo from './capitalOne.png'
import '../components/navigationBar.css';

function NavigationBar() {
    return(
        <div class = "navbar"> 
         <img src={navlogo} className="navlogo" alt="Credfit logo"/>
         <img src={caplogo} className="caplogo" alt="Capital One logo "/>
        </div>

    )
}
export default NavigationBar;


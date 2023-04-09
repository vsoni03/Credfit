import navlogo from './credfitLogo.png';
import caplogo from './capitalOne.png'
import '../components/navigationBar.css';

function navigationBar() {
    return(
        <div class = "navbar"> 
         <img src={navlogo} className="navlogo" alt="logo"/>
         <img src={caplogo} className="caplogo" alt="logo"/>
        </div>

    )
}
export default navigationBar;


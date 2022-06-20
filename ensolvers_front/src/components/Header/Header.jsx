// Archivos
import './Header.css';

// Hooks
import { useState } from 'react';

// Librerias
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaSistrix } from 'react-icons/fa';

function Header() {

 

    //  DISPLAY DE MENU CUANDO PANTALLA CHICA

    // variable que cambia para indicar display menu chico
    const [showMobileMenu, setShowMobileMenu] = useState("mobileMenuOff");

    // funcion que controla el display del menu
    const HandleMobileMenu = () => {
        if (showMobileMenu == "mobileMenuOff") {
          setShowMobileMenu("mobileMenuOn");
        } else {
            setShowMobileMenu("mobileMenuOff");
        }
    };




    return (
        <>
            <header className="header">
                <figure className="logo-container">
                    <img src="./reactLogo.png" />
                </figure>
        
                {/* Responsive Icons */}
                {showMobileMenu === "mobileMenuOff"
                    ?  <FaBars className="hamburger" onClick={HandleMobileMenu}/>
                    : <FaTimes className="hamburger" onClick={HandleMobileMenu}/>
                }

                <ul className={showMobileMenu}>
                    <li><Link className='navItem' to="/active" onClick={HandleMobileMenu}>NOTAS ACTIVAS</Link></li>
                    <li><Link className='navItem' to="/archived"  onClick={HandleMobileMenu}>NOTAS ARCHIVADAS</Link></li>
                    <li><Link className='navItem' to="/create"  onClick={HandleMobileMenu}>CREAR NOTA</Link></li>
                </ul>
                
            </header>
        </>
    )
}

export default Header;
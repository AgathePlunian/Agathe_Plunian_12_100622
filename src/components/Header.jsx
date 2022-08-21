import logo from '../assets/img/logo-sportsee.png'
import { NavLink } from 'react-router-dom';

/**
 * Render Header nav 
 */

function Header() {

  return (

    <div className='main-nav-container'> 
        
        <div className="container">
           
            <ul className='nav-list'>
                <li>
                    <div className='logo-container'>
                    <NavLink to="/" > <img src={logo} alt="Logo" /></NavLink>     
                    </div>
                </li>
        
                <li className="nav-item"><NavLink
                    className="nav-link"
                    to="/"
                >
                    Accueil
                </NavLink>
                </li>

                <li className="nav-item"><NavLink
                    className="nav-link"
                    to="/"
                >
                Profil
                </NavLink>
                </li>

                <li className="nav-item"><NavLink
                    className="nav-link"
                    to="/"
                >
                Réglage
                </NavLink>
                </li>

                <li className="nav-item"><NavLink
                    className="nav-link"
                    to="/"
                >
                Communauté
                </NavLink>
                </li>
                </ul>
    
        </div>
    </div>
  )
}


export default Header

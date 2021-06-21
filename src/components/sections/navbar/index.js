import './style.css';
import NavLinks from '../../reusable/nav-links';

//Logo
import logo from '../../../images/logo.png';

function Navbar() {

  return (
    <div>
        <nav className="navbar">
            <div className="container">
                <div className="navbar-grid">
                    <a href="#"><img src={logo} className="logo"/></a>
                    <div className="cf">
                        <NavLinks />
                        {/* <a href='#' id='openup'>MENU</a> */}
                    </div>
                </div>
            </div>
        </nav>
    </div>
  );
  
}

export default Navbar;

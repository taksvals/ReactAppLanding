import './style.css';
import NavLinks from '../../reusable/nav-links';

// Download img
import logo from '../../../images/logo.png';

function Footer() {

  return (
    <footer>
        <section className="footer-section">
            <div className="container">
                <a href="#"><img src={logo} className="logo" alt="" /></a>
                <div className="footer-links">
                    <NavLinks 
                        display="none"    
                    />
                </div>
                <div>
                    <ul className="footer-icons">
                        <li><a href="#"><i className="fab fa-facebook-f"></i></a></li>
                        <li><a href="#"><i className="fab fa-twitter"></i></a></li>
                        <li><a href="#"><i className="fab fa-slack-hash"></i></a></li>
                        <li><a href="#"><i className="fab fa-github-square"></i></a></li>
                    </ul>
                </div>
                <p>Copyright&copy; Tanya Slavska 2021. All rights reserved.</p>
            </div>
        </section>
    </footer>
  );
  
}

export default Footer;

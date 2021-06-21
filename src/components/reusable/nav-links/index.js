import './style.css';

function NavLinks({display}) {

  return (
    <div>
        <ul className="cf nav">
            <li><a href="#home">Home</a></li>
            <li><a href="#key-features">Key Features</a></li>
            <li><a href="#pricing">Pricing</a></li>
            <li><a href="#testinial">Testiminial</a></li>
            <li><a href="#faq">FAQ</a></li>
            <li className={display}><a id="btn-navbar" href="#try-for-free">Try for free</a></li>
        </ul>
    </div>
  );
  
}

export default NavLinks;

import './style.css';

//Home img
import company1 from '../../../images/company-1.png';
import company2 from '../../../images/company-2.png';
import company3 from '../../../images/company-3.png';
import company4 from '../../../images/company-4.png';
import company5 from '../../../images/company-5.png';


function Partners() {

  return (
    <div id="key-features">
    <section className="companies-section">
        <div className="container">
            <p className="py-2">Trusted by companies like</p>
            <div className="companies-grid">
                <img src={company1} alt="" />
                <img src={company2} alt="" />
                <img src={company3} alt="" />
                <img src={company4} alt="" />
                <img src={company5} alt="" />
            </div>
        </div>
    </section>
    </div>
  );
   
}

export default Partners;

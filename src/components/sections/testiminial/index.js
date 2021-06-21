import './style.css';
import Text from '../../reusable/text';
import TestiminialItem from '../../reusable/testiminial-item';
import Slider from '../testiminial-slider';

// Person img
import testimonials from '../../../images/testimonials.png';
import person1 from '../../../images/person-1.png';
import person2 from '../../../images/person-2.png';
import client1 from '../../../images/client-1.png';

const sliderData = [
    {
        name: "Caroline Smith",
        position:"CEO",
        imgLink: person2
  
    }, 
    {
        name:"Zoltan Nemeth",
        position:"CEO of Pixler Lab",
        imgLink: client1
    },
    {
        name:"john Doe",
        position:"CEO",
        imgLink: person1 
    }
  ];

function Testiminial() {

  return (
    <div id="testinial">
        <section className="testinial-section">
            <div className="container">
                <div className="testinial-grid">
                    <div className="testinial-img">
                        <img src={testimonials} alt="" />
                    </div>
                    <div>
                        <div className="slideshow-container">
                            <Slider slides={sliderData} />
                        </div>
                    </div>
                </div>
            </div>
        </section>

    </div>
  );
  
}

export default Testiminial;

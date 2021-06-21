import './style.css';
import Text from '../text';

function TestiminialItem({name, position, imgLink}) {

  return (
    <div class="mySlides">
        <div class="testinial-text">

            <Text   
                headingSize={40}   
                heading="Meet Client Satisfaction by using product" 
                text="The rise of mobile devices transforms the way we consume.
                elevant channels such as Facebook." 
                align="left"
            />

            <div>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
                <i class="fas fa-star"></i>
            </div>

            <Text   
                headingSize={36}   
                heading="User friendly & Customizable" 
                text="Bring to the table win-win survival strategies to ensure proactive domination. 
                At the end of the day, going forward, a new normal that has evolved from generation 
                X is on the runway heading towards a streamlined cloud solution. 
                User generated content in real-time will have multiple touchpoints for offshoring." 
                align="left"
            />

            <div class="person-grid">
                <img class="icon" src={imgLink} alt="" />
                <div>
                    <h6>{name}</h6>
                    <p>{position}</p>
                </div>
            </div>
        </div>
    </div>
  );
  
}

export default TestiminialItem;

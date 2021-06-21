import './style.css';
import Text from '../../reusable/text';
import BtnPrimary from '../../reusable/btn-primary';

//Integration img
import integration from '../../../images/integration.png';


function Integration() {

  return (
    <section className="integration-section">
        <div className="container">
            <div className="integration-grid">
                <img src={integration} alt="" />
                <div>
                    <Text   
                        headingSize="average"   
                        heading="Designed & build by the latest code integration" 
                        text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                        Quam aperiam voluptatum hic temporibus suscipit! 
                        Et debitis ut fuga ad similique." 
                        align="left"
                    />

                    <BtnPrimary 
                        title="Learn More"
                    />
                </div>
            </div>
        </div>
    </section>
  );
  
}

export default Integration;

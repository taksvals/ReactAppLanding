import './style.css';
import FeatureItem from '../../reusable/feature-item';

//Icons
import icon4 from '../../../images/icon-4.png';
import icon5 from '../../../images/icon-5.png';
import icon6 from '../../../images/icon-6.png';

function JackpotFeatures() {

  return (
    <section className="jackpot-section">
        <div className="container">
            <div className="jackpot-features-grid py-2">
                <FeatureItem 
                    imgLink={icon4}
                    heading="Automatic Payload" 
                    headingColor="pink"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit fuga nemo doloribus dolores autem possimus, quibusdam velit laboriosam pariatur itaque!"
                    align="left"
                    grid="simple"
                />

                <FeatureItem 
                    imgLink={icon5}
                    heading="Network Effect" 
                    headingColor="blue"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit fuga nemo doloribus dolores autem possimus, quibusdam velit laboriosam pariatur itaque!"
                    align="left"
                    grid="simple"
                />

                <FeatureItem 
                    imgLink={icon6}
                    heading="Bigger Rewards Method" 
                    headingColor="green"
                    text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                    Sit fuga nemo doloribus dolores autem possimus, quibusdam velit laboriosam pariatur itaque!"
                    align="left"
                    grid="simple"
                />

            </div>
        </div>
    </section>
  );
  
}

export default JackpotFeatures;

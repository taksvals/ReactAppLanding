import './style.css';
import Text from '../../reusable/text';
import FeatureItem from '../../reusable/feature-item';

//Icons
import appDevelopment from '../../../images/app-development.png';
import award from '../../../images/award.png';
import cloud from '../../../images/cloud.png';
import customization from '../../../images/customization.png';
import ux from '../../../images/ux.png';
import support from '../../../images/support.png';


function Advantages() {

  return (
    <section className="advantages-section">
        <div className="container">

            <Text   
                headingSize="average"     
                heading="Why you should choose our app" 
                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                Incidunt aspernatur corporis culpa reiciendis, magnam non aliquam. Quasi architecto nihil magni?" 
                align="center"
            />

            <div className="advantages-grid">

                <FeatureItem 
                    imgLink={appDevelopment}
                    heading="App Development" 
                    headingColor="primary"
                    text="Get your blood tests delivered at
                    home collect a sample from the
                    news your blood tests."
                    align="center"
                    grid="simple"
                />

                <FeatureItem 
                    imgLink={award}
                    heading="10 Times Award" 
                    headingColor="primary"
                    text="Get your blood tests delivered at
                    home collect a sample from the
                    news your blood tests."
                    align="center"
                    grid="simple"
                />

                    <FeatureItem 
                    imgLink={cloud}
                    heading="Cloud Storage" 
                    headingColor="primary"
                    text="Get your blood tests delivered at
                    home collect a sample from the
                    news your blood tests."
                    align="center"
                    grid="simple"
                />

                <FeatureItem 
                    imgLink={customization}
                    heading="Customization" 
                    headingColor="primary"
                    text="Get your blood tests delivered at
                    home collect a sample from the
                    news your blood tests."
                    align="center"
                    grid="simple"
                />

                <FeatureItem 
                    imgLink={ux}
                    heading="UX Planning" 
                    headingColor="primary"
                    text="Get your blood tests delivered at
                    home collect a sample from the
                    news your blood tests."
                    align="center"
                    grid="simple"
                />

                <FeatureItem 
                    imgLink={support}
                    heading="Customer Support" 
                    headingColor="primary"
                    text="Get your blood tests delivered at
                    home collect a sample from the
                    news your blood tests."
                    align="center"
                    grid="simple"
                />

            </div>
        </div>

    </section>
  );
  
}

export default Advantages;

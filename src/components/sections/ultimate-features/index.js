import './style.css';
import Text from '../../reusable/text';
import FeatureItem from '../../reusable/feature-item';
import BtnPrimary from '../../reusable/btn-primary';

//Icons
import ultimateFeatures from '../../../images/Group 92.png';
import appDevelopment from '../../../images/app-development.png';
import cloud from '../../../images/cloud.png';
import ux from '../../../images/ux.png';
import support from '../../../images/support.png';


function UltimateFeatures() {

  return (
    
    <section className="ultimate-features-section">
        <div className="container">
            <div className="ultimate-features-grid">
                <div>

                    <Text   
                        headingSize={36}   
                        heading="Ultimate features that we built" 
                        text="The rise of mobile devices transforms the way
                        we consume information entirely." 
                        align="left"
                    />

                    <div className="ultimate-feature-grid py-2">
                        <FeatureItem 
                            imgLink={appDevelopment}
                            heading="App Development" 
                            headingColor="primary"
                            text="Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests."
                            align="left"
                            grid="simple"
                        />

                        <FeatureItem 
                            imgLink={ux}
                            heading="UX Planning" 
                            headingColor="primary"
                            text="Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests."
                            align="left"
                            grid="simple"
                        />          

                        <FeatureItem 
                            imgLink={cloud}
                            heading="Cloud Storage" 
                            headingColor="primary"
                            text="Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests."
                            align="left"
                            grid="simple"
                        /> 

                        <FeatureItem 
                            imgLink={support}
                            heading="Customer Suport" 
                            headingColor="primary"
                            text="Get your blood tests delivered at
                            home collect a sample from the
                            news your blood tests."
                            align="left"
                            grid="simple"
                        /> 
                        
                    </div>

                    <BtnPrimary 
                        title="See all"
                    />
                </div>
                <div className="ultimate-features-img">
                    <img className="ultimate-img" src={ultimateFeatures} alt="" />
                </div>
            </div>
        </div>
    </section>
  );
  
}

export default UltimateFeatures;

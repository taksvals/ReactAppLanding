import './style.css';
import Text from '../../reusable/text';
import FeatureItem from '../../reusable/feature-item';

//Awesome features img
import featuresPhone from '../../../images/features-phone.png';
import icon1 from '../../../images/icon-1.png';
import icon2 from '../../../images/icon-2.png';
import icon3 from '../../../images/icon-3.png';


function AwesomeFeatures() {

  return (
    <section className="awesome-features-section">
            <div className="container">
                <div className="awesome-features-grid">
                    <img className="awesome-img" src={featuresPhone} alt="" />
                    <div>
                        <Text   
                            headingSize="average"   
                            heading="Awesome apps features" 
                            text="Increase productivity with a simple to-do app. 
                            app for managing your personal budgets." 
                            align="left"
                        />
                        
                        <div className="py-2">
                            <FeatureItem 
                                imgLink={icon1}
                                heading="App Development" 
                                headingColor="pink"
                                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Quos repellendus, enim non necessitatibus eaque veniam harum voluptatibus laudantium omnis itaque."
                                align="left"
                                grid="grid"
                            />

                            <FeatureItem 
                                imgLink={icon2}
                                heading="Prototyping" 
                                headingColor="blue"
                                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Quos repellendus, enim non necessitatibus eaque veniam harum voluptatibus laudantium omnis itaque."
                                align="left"
                                grid="grid"
                            />


                            <FeatureItem 
                                imgLink={icon3}
                                heading="Vector Editing" 
                                headingColor="green"
                                text="Lorem ipsum dolor, sit amet consectetur adipisicing elit. 
                                Quos repellendus, enim non necessitatibus eaque veniam harum voluptatibus laudantium omnis itaque."
                                align="left"
                                grid="grid"
                            />

                        </div>

                    </div>
                </div>
            </div>
        </section>
  );
  
}

export default AwesomeFeatures;

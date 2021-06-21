import './style.css';
import Text from '../../reusable/text';

// Download img
import download from '../../../images/download.png';
import googleplay from '../../../images/googleplay.png';
import ios from '../../../images/ios.png';


function Download() {

  return (
    <div id="try-for-free">
        <section className="free-section">
            <div className="container">
                <div className="free-grid">
                    <div>
                        <div>
                            <Text   
                                headingSize="large"   
                                heading="Download our App now!" 
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nobis eaque delectus consectetur suscipit perspiciatis et." 
                                align="left"
                            />
                        </div>
                        <div className="icons">
                            <img className="icon-download" src={googleplay} alt="" />
                            <img className="icon-download" src={ios} alt="" />
                        </div>
                    </div>
                    <div className="free-img">
                        <img src={download} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
  
}

export default Download;

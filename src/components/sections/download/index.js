import './style.css';
import Text from '../../reusable/text';

// Download img
import download from '../../../images/download.png';
import googleplay from '../../../images/googleplay.png';
import ios from '../../../images/ios.png';


function Download() {

  return (
    <div id="try-for-free">
        <section class="free-section">
            <div class="container">
                <div class="free-grid">
                    <div>
                        <div>
                            <Text   
                                headingSize={36}   
                                heading="Download our App now!" 
                                text="Lorem ipsum dolor sit amet consectetur adipisicing elit. 
                                Nobis eaque delectus consectetur suscipit perspiciatis et." 
                                align="center"
                            />
                        </div>
                        <div className="icons">
                            <img class="icon-download" src={googleplay} alt="" />
                            <img class="icon-download" src={ios} alt="" />
                        </div>
                    </div>
                    <div class="free-img">
                        <img src={download} alt="" />
                    </div>
                </div>
            </div>
        </section>
    </div>
  );
  
}

export default Download;

import './style.css';
import Text from '../../reusable/text';
import BtnPrimary from '../../reusable/btn-primary';
import BtnLight from '../../reusable/btn-light';

//Home img
import home from '../../../images/Pkonr.png';

function Home() {

  return (
    <div id="home">
        <section className="home-section">
            <div className="container">
                <div className="home-grid">
                    <div>
                        <div className="editor-choice">
                            <div className="check">
                                 <i className="far fa-check-circle"></i>
                            </div>
                            <p>#1 Editors Choice App of 2020</p>
                        </div>

                        <Text   
                            headingSize={40}   
                            heading="Best app for your modern lifestyle" 
                            text="Increase productivity with a simple to-do app. 
                            app for managing your personal budgets." 
                            align="left"
                        />
                        <div>
                            <BtnPrimary 
                            title="Try for free"
                            href="#try-for-free"
                            />
                            <BtnLight 
                            title="Watch demo video"
                            href="#"
                            />
                        </div>
                    </div>
                    <img src={home} alt="home-img"/>
                </div>
            </div>
        </section>
    </div>
  );
  
}

export default Home;

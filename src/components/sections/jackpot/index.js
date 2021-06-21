import './style.css';
import Heading from '../../reusable/heading';

function Jackpot() {

  return (
    <section className="jackpot-section">
        <div className="container">
            <div className="smart-jackpot-grid py-2">
                <div className="jackpot-heading">
                    <Heading 
                        heading="Smart jackpots that you may love this anytime & anywhere."
                        headingSize={40}
                    />
                </div>
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Odio placeat 
                    ipsam eos consequatur quisquam, temporibus, ea facilis vitae aliquid expedita ducimus vel! 
                </p>
            </div>
        </div>
    </section>
  );
  
}

export default Jackpot;

import './style.css';
import Text from '../../reusable/text';
import PricingItem from '../../reusable/pricing-item';
import { Component } from 'react';

class Pricing extends Component {
    constructor(props) {
        super(props);
        this.state = {
            value: 0
        };
    }

    radioHandler = (value) => {
        this.setState({ value });
    };

    render() {
        const {value} = this.state;
        return (
            <div id="pricing">
                <section className="pricing-section">
                    <div className="container">
                        <Text   
                            headingSize="average"     
                            heading="Get awesome features, without extra charges" 
                            text="The rise of mobile devices transforms the way we consume
                            information entirely and the world's most elevant channels
                            such as Facebook." 
                            align="center"
                        />

                        <div>
                            <div>
                                <div>
                                    <div className="form_toggle">
                                        <div className="form_toggle-item item-1">
                                            <input id="fid-1" type="radio" name="sub" value={0} checked={value === 0} onChange={(e) => this.radioHandler(0)}/> 
                                            <label htmlFor="fid-1"> Monthly</label>
                                        </div>
                                        <div className="form_toggle-item item-2">
                                            <input id="fid-2" type="radio" name="sub" value={1} checked={value === 1} onChange={(e) => this.radioHandler(1)}/> 
                                            <label htmlFor="fid-2"> Annually</label>
                                        </div>
                                    </div>
                                    {value === 0 && 
                                        <div className="monthly">
                                            <div className="pricing-grid">
                                                <PricingItem price="0" btnText="Start free trial"/>
                                        
                                                <PricingItem price="99"  btnText="Subscribe Now"/>
                                            </div>
                                        </div>
                                    }
                                    {value === 1 && 
                                        <div className="annually">
                                            <div className="pricing-grid">
                                                <PricingItem price="8.39" btnText="Start free trial"/>
                                        
                                                <PricingItem price="199" btnText="Subscribe Now"/>
                                            </div>
                                        </div>
                                    }
                                </div>
                            </div>
                        </div>

                    </div>
                </section>
            </div>
        );
    }
}

export default Pricing;

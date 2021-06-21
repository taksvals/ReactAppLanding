import './style.css';
import BtnPrimary from '../btn-primary';

function PricingItem({price, btnText}) {
  return (
    <div className="pricing-item">
        <div className="pricing-item-heading">
            <p><b>${price}</b>/month</p>
            <h6>Business Class</h6>
            <span>For small teams or offices</span>
        </div>
        <div className="pricing-item-body">
            <ul>
                <li>Drag & Drop Builder</li>
                <li>1000's of Templates</li>
                <li>Blog Support Tools</li>
                <li>eCommerce Store</li>
            </ul>
            <BtnPrimary title={btnText}/>
        </div>
    </div>
  );
}

export default PricingItem;

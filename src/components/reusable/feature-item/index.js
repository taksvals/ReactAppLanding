import './style.css';


function FeatureItem({imgLink, heading, headingColor, text, align, grid}) {
  return (
    <div className="feature-item">
          <div className={align + " " + grid}>
            <img className="icon" src={imgLink} alt="feature"/>
            <div>
                <h6 className={headingColor}>{heading}</h6>
                <p>{text}</p>
            </div>
        </div>
    </div>
  );
}

export default FeatureItem;

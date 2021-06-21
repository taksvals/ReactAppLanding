import './style.css';
import Heading from '../heading';

function Text({headingSize, heading, text, align}) {
  return (
    <div className="text-item">
          <div className={align}>
            <Heading headingSize={headingSize} heading={heading}/>
            <p>{text}</p>
        </div>
    </div>
  );
}

export default Text;

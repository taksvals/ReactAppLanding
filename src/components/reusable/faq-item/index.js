import './style.css';
import { useState } from 'react';

function FaqItem({heading, text}) {
  const [isActive, setIsActive] = useState(false);

  return (
    <div className="accordion-item">
      <div className="accordion" onClick={() => setIsActive(!isActive)}>
        <div>{heading}</div>
      </div>
      <div className="panel">
          {isActive && <div>{text}</div>}
      </div>
    </div>
  );
  
}

export default FaqItem;

import './style.css';

function Heading({headingSize, heading}) {
  return (
    <h1 className={headingSize === 40 ? "large" : "average"}>
        {heading}
    </h1>
  );
}

export default Heading;

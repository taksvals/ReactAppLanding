import './style.css';

function Heading({headingSize, heading}) {
  return (
    <h1 className={headingSize}>
        {heading}
    </h1>
  );
}

export default Heading;

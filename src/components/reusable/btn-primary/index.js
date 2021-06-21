import './style.css';

function BtnPrimary({title, href}) {
  return (
    <a className="btn-primary" href={href}>{title}</a>
  );
}

export default BtnPrimary;

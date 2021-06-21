import './style.css';

function BtnLight({title, href}) {
  return (
    <a className="btn-light" href={href}>
        {title}
    </a>
  );
}

export default BtnLight;

import "./Component.css";
import Icon from "./Icon.png";

function Header() {
  return (
    <div className="navbar">
      <div className="icon">
        <img src={Icon} alt="logo" />
      </div>
      <div className="list">
        <ul>
          <a href="https://rubixe.com/">
            <li>HOME</li>
          </a>
          <a href="https://rubixe.com/services/">
            {" "}
            <li>SERVICES</li>
          </a>
          <a href="https://rubixe.com/products/">
            {" "}
            <li>PRODUCT</li>
          </a>
          <li>AI INTERNSHIP</li>
          <a href="https://rubixe.com/career/">
            {" "}
            <li>CAREER</li>
          </a>
          <a href="https://rubixe.com/blog/">
            {" "}
            <li>BLOG</li>
          </a>
          <a href="https://rubixe.com/about/">
            {" "}
            <li>ABOUT</li>
          </a>
          <a href="https://rubixe.com/contact-us/">
            <li>CONTACT US</li>
          </a>
        </ul>
      </div>
    </div>
  );
}

export default Header;

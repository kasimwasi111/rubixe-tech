import "./Component.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebook, faLinkedin } from "@fortawesome/free-brands-svg-icons";
function Footer() {
  return (
    <>
      <div className="about">
        <div className="p1">
          <p className="para">
            ABOUT US
            <br />
            Rubixe™ is a global technology company specializing in disruptive
            technologies Artificial Intelligence (AI), Machine Learning, Robotic
            Process Automation (RPA), BlockChain and Internet of Things (IoT).
            Rubixe mission to enable businesses to leverage the full potential
            of disruptive technologies to stay competitive in the market.
          </p>
        </div>
        <div className="list">
          <ul>
            MENUS
            <li>Home</li>
            <li>Services</li>
            <li> Products</li>
            <li> Career</li>
          </ul>
        </div>
        <div className="learn">
          <p>LEARN MORE</p>
          <p>About </p>
          <p> Contact Us</p>
        </div>
        <div className="address">
          <p>
            ADDRESS <br />
            Novel Tech Park, 1st Floor, Hosur Rd, Kudlu gate, Bengaluru,
            Karnataka 560068 Phone: 0804-717-8999 Email: hi@rubixe.com
          </p>
          SOCIAL MEDIA <br />
          <FontAwesomeIcon className="ic" icon={faFacebook}>
            {" "}
            &nbsp;
          </FontAwesomeIcon>{" "}
          <FontAwesomeIcon icon={faLinkedin} className="ic"></FontAwesomeIcon>
        </div>
      </div>
      <footer className="foot">
        <p>
          {" "}
          © Copyright 2017 - 2023 | Rubixe is a brand of THINK AHEAD INNOVATIONS
          PVT. LTD. | All Rights Reserved
        </p>{" "}
      </footer>
    </>
  );
}

export default Footer;

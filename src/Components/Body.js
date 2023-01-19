import first from "./first.jpg";
import "./Component.css";
import second from "./second.jpg";
function Body() {
  return (
    <>
      <div className="first">
        <img src={first} alt="first" />
      </div>
      <br />

      <div className="text">
        <p className="para">
          <h3>WHO WE ARE</h3> <br />
          Rubixe™ is a global technology company specializing in disruptive
          technologies – Artificial Intelligence (AI), Machine Learning, Robotic
          Process Automation (RPA), BlockChain and Internet of Things (IoT).{" "}
          <br />
          <br />
          Rubixe™ mission to enable businesses to leverage the full potential of
          disruptive technologies to stay competitive in the market, turning
          complex challenges into solutions providing a strategic competitive
          advantage that are more efficeint , effective and predictable.
        </p>
        <img src={second} alt="second" />
      </div>
      <div className="purple">
        <h2 className="text">WHERE WE STARTED</h2>
        <p className="text">
          We started in 2015, With a passionate team who want to bring
          game-changing solutions through disrupting technologies. We expertise
          in delivering enterprise-level solutions in the field of Artificial
          Intelligence(AI),Cyber Security, Robotic Process Automation(RPA),
          Internet of Things(IoT), and BlockChain technology.
        </p>
      </div>
    </>
  );
}

export default Body;

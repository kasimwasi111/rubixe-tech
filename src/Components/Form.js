import "./Component.css";
function Form() {
  return (
    <>
      <div className="contact">
        <div className="left">
          <h1>GET IN TOUCH</h1>
          <p>Please complete the form and we will get back to you</p>
        </div>
        <div className="right">
          <form>
            <label>Name*</label>
            <input type="text" placeholder="Enter Your Name" />
            <label>Email*</label>
            <input type="email" placeholder="Enter Your Email" />
            <label>Mobile Number*</label>
            <input type="number" placeholder="Enter Your Mobile Number" />
            <br />
            <button>Register Now</button>
          </form>
        </div>
      </div>
    </>
  );
}

export default Form;

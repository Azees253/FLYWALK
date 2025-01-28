import "./collectionstyle/Contact.css";
import { FaInstagram } from "react-icons/fa";
import { CiFacebook } from "react-icons/ci";
import { BsTwitter } from "react-icons/bs";

export default function Contact() {
  return (
    <>
      <div className="container">
        <div className="contact">
          <form className="form">
            <input type="text" placeholder="First Name"></input>
            <input type="text" placeholder="Last Name"></input>
            <input type="text" placeholder="Address"></input>
            <input type="text" placeholder="Street"></input>
            <input type="text" placeholder="City"></input>
            <input type="text" placeholder="Zip-Code"></input>
            <div>
              <button>Submit</button>
            </div>
          </form>
        </div>
      </div>
      {/* Footer */}
      <div className="footer">
        <div className="footer-container">
          <div className="footer-box-1">
            <h2 className="heading-text"> FLYWALK</h2>
            <p>Lorem Ipsum is simply dummy text of the printing</p>
            <div className="footer-icon-container">
              <i style={{ color: "#ffffff" }}>
                <FaInstagram />
              </i>
              <i style={{ color: "#ffffff" }}>
                <CiFacebook />
              </i>
              <i style={{ color: "#ffffff" }}>
                <BsTwitter />
              </i>
            </div>
          </div>
        </div>

        <p>@2025 FLYWALK</p>
      </div>
    </>
  );
}

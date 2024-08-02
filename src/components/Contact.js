import "../styles/contact.css";
import GithubIcon from "../static/icons/GithubIcon.js";
import LinkedinIcon from "../static/icons/LinkedinIcon.js";
import MailIcon from "../static/icons/MailIcon.js";

const Contact = () => {
  return (
  <div className="contact-wrapper">
    <img className="paper-plane" src={require("../static/animation/paper-plane5.png")} />
    <div className="contact">
      <div className="contact-page">
        <h2>Feel free to contact me</h2>
        <p>Dilara Tülüce</p>
        <div className="contact-links">
          <a className="link-icon" href="https://www.linkedin.com/in/dilara-tuluce" target="_blank">
            <LinkedinIcon />
            <p className="link-text">Linkedin</p>
          </a>
          <a className="link-icon" href="https://github.com/dilaratuluce" target="_blank">
            <GithubIcon />
            <p className="link-text">Github</p>
          </a>
          <a className="link-icon" href="mailto:dilaratuluce@gmail.com" target="_blank">
            <MailIcon />
            <p className="link-text">Mail</p>
          </a>
        </div>
      </div>
    </div>
  </div>
  );
}
 
export default Contact;
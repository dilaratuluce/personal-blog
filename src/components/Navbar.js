import { Link } from "react-router-dom";
import "../styles/navbar.css";

const Navbar = (props) => {
  return ( 
    <div className="navbar">
      <div className="title">
          <span style={{ fontSize: "120%" }}>DILARA</span>
      </div>
      <div className="links" >
        <Link 
          to="/" 
          className={`link ${props.page === "about" ? "selected-link" : ""}`} 
          onClick={() => props.setPage("about")}
        >
          About
        </Link>
        <Link 
          to="/blog" 
          className={`link ${props.page === "blog" ? "selected-link" : ""}`} 
          onClick={() => props.setPage("blog")}
        >
          Blog
        </Link>
        <Link 
          to="/contact" 
          className={`link ${props.page === "contact" ? "selected-link" : ""}`} 
          onClick={() => props.setPage("contact")}
        >
          Contact
        </Link>
      </div>
    </div>
   );
}
 
export default Navbar;
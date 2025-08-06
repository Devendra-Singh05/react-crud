import { Link } from "react-router-dom";
import "./nav.css"

export default function Navbar() {
  return (
    <div>
      <ul style={{ display:"flex" , listStyle:"none",color:"wheat"}}>
        <li>
          <Link to="/home" className="nav-link" > Home</Link>
        </li>

        <li>
          <Link to="/categories"  className="nav-link active"> Categories</Link> 
        </li>
        <li>
          <Link to="/product" className="nav-link" > Products</Link>
        </li>
      </ul>
    </div>
  );
}

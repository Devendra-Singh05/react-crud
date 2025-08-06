import { Nav, Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";


export default function Header() {
  return (
<Navbar>
  <Nav>
 <Nav.Link><Link to="/student">student</Link>
        </Nav.Link>
        <Nav.Link>
            
        <Link to="/teacher">teacher</Link>
        </Nav.Link>
        </Nav>
</Navbar>
  )
}


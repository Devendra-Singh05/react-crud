import { Col, Row } from "react-bootstrap";
import "./header.css";
import Navbar from "./nav/Navbar";
export default function Header() {
  return (
    <header className="main">
      <Row>
        <Col lg="4">
          <h4 className="text-white" style={{padding:"0.5rem",paddingLeft:"3rem" }}>Axixa Technology</h4>
        </Col>
        <Col lg="8">

          <Navbar></Navbar>
        </Col>
      </Row>
    </header>
  );
}

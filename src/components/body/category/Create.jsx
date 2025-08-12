import { useState } from "react";
import { Button, Form } from "react-bootstrap";
import { createdata } from "../../../lib/db";
import { Link, useNavigate } from "react-router-dom";
export default function Create() {
  let [data, setData] = useState({ name: "", description: "" });
let [error,setError]=useState([]);
  const changeit = (e) => {
    setData({ ...data, [e.target.name]: e.target.value });
  };

  const redirect=useNavigate();

  return (
    <div>
<div className="d-flex justify-content-between align-items-center">
  <h2 className="m-0">Create Form</h2>
  <Link className="btn btn-secondary" to="/categories">
    Back
  </Link>
</div>

      <Form>
        <Form.Group controlId="name" className="mb-4">
          <Form.Label className="fw-bold">Name</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your name"
            name="name"
            onChange={changeit}
            className="shadow-sm"
          />
          <Form.Text className="text-muted">
            <span style={{color:"red" }}>{error}</span>
          </Form.Text>
        </Form.Group>
        <Form.Group controlId="description">
          <Form.Label className="fw-bold">Description</Form.Label>
          <Form.Control
            type="text"
            placeholder="Enter your Description"
            name="description"
            onChange={changeit}
            className="shadow-sm"
          />
          <Form.Text className="text-muted">
            <span style={{color:"red" }}>{error}</span>
          </Form.Text>
        </Form.Group>
      </Form>
      <div className="text-center ">

      <Button
        onClick={() => {
          createdata("categories", data)
          .then((r) => {
            window.alert(r.message);
            redirect('/categories')
          })
          .catch((e) => {
            setError(e.message);
            // window.alert(e.message);
            
            
          });
        }} className="mt-3"
        >
        Save
      </Button>
        </div>
    </div>
  );
}

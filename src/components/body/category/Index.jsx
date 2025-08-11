import { Link } from "react-router-dom";
import { all } from "../../../lib/db";
import { useEffect, useState } from "react";
import { Container, Table } from "react-bootstrap";

export default function Index() {
  let [data, setData] = useState([]);
  let [error, setError] = useState("");
  let [load, setLoad] = useState(false);
  useEffect(() => {
    all("categories")
      .then((fdata) => {
        setLoad(true);
        setData(fdata);
        // console.log(data);
      })
      .catch((e) => {
        setLoad(true);
        setError(e.message);
      });
  }, []);

  return (
    <div>
      {load ? (
        <Container>
          <Link to="/createcategory" className="btn btn-success mb-2">
            Create
          </Link>
          <Table className="border">
            <thead className="table-success">
              <tr>
                <th>S.no</th>
                <th>Name</th>
                <th>Discription</th>
                <th colSpan={2} className="text-center">
                  Action
                </th>
              </tr>
            </thead>
            <tbody>
              {data.length ? (
                data.map((info, index) => {
                  return (
                    <tr>
                      <td>{index + 1}</td>
                      <td>{info.name}</td>
                      <td>{info.description}</td>
                      <div>
                        <td className="btn btn-warning  me-3">Edit</td>
                        <td className="btn btn-danger">delete</td>
                      </div>
                    </tr>
                  );
                })
              ) : (
                <tr>
                  <td className="text-center" colSpan={5}>
                    {error ? (
                      <span className="text-danger">{error}</span>
                    ) : (
                      <span className="text-muted">N/a</span>
                    )}
                  </td>
                </tr>
              )}
            </tbody>
          </Table>
        </Container>
      ) : (
        <div className="text-center">
          <img
            src="https://indianmemetemplates.com/wp-content/uploads/ruko-zara-sabar-karo.jpg"
            alt="loading"
            className="loader-gif"
            style={{ width: "150px" }}
          />
        </div>
      )}
      ;
    </div>
  );
}

import Axios from "axios";
import { useState, useEffect } from "react";

import "./App.css";
import "bootstrap/dist/css/bootstrap.min.css";
import { Container, Badge, ListGroup, Form } from "react-bootstrap";

export default function App() {
  const api = "http://localhost:5000";
  const [users, setUsers] = useState([]);
  const defaultUser = { name: "", age: 0, email: "" }
  const [user, setUser] = useState(defaultUser);
  
  const { name, age, email } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createUser = () => {
    if (name && age && email) {
      Axios.post(`${api}/createUser`, user).then((res) => {
        setUsers([...users, res.data]);
        setUser(defaultUser);
      });
    }
  };

  useEffect(() => {
    Axios.get(`${api}/users`)
    .then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  return (
    <Container>
      <div className="result">
        {users.map(({ _id, name, age, email }) => (
          <ListGroup key={_id}>
            <ListGroup.Item
              variant="dark"
              className="d-flex justify-content-between"
            >
              <div className="ms-2 me-auto">
                <div className="fw-bold">{name}</div>
                {email}
              </div>
              <Badge bg="success" pill>{age}</Badge>
            </ListGroup.Item>
          </ListGroup>
        ))}
      </div>
      <div className="mt-2">
        <Form className="form">
          <Form.Control
            type="name"
            placeholder="Name"
            className="form-control"
            id="name"
            name="name"
            onChange={onChange}
          />
          <Form.Control
            type="number"
            placeholder="Age"
            className="form-control"
            id="age"
            name="age"
            onChange={onChange}
          />
          <Form.Control
            type="email"
            placeholder="email"
            className="form-control"
            id="email"
            name="email"
            onChange={onChange}
          />
          <button onClick={createUser} type="submit" class="btn btn-success">Create User</button>
        </Form>
      </div>
      

     {/*  <div>
        <input
          type="text"
          id="name"
          name="name"
          placeholder="Name"
          value={name}
          onChange={onChange}
        />
        <input
          type="number"
          id="age"
          name="age"
          placeholder="Age"
          value={age}
          onChange={onChange}
        />
        <input
          type="text"
          id="email"
          name="email"
          placeholder="Email"
          value={email}
          onChange={onChange}
        />
        <button onClick={createUser}>Create User</button>
      </div> */}
    </Container>
  );
}

import Axios from "axios";
import { useState, useEffect } from "react";
// https://jsonplaceholder.typicode.com/users

export default function App() {
  const api = "http://localhost:5000";
  const [users, setUsers] = useState([]);
  const [user, setUser] = useState({
    name: "",
    age: "",
    email: "",
  });
  const { name, age, email } = user;

  const onChange = (e) => {
    setUser({ ...user, [e.target.name]: e.target.value });
  };

  const createUser = () => {
    if (name && age && email) {
      Axios.post(`${api}/createUser`, {
        name,
        age,
        email,
      }).then((res) => {
        setUsers([...users, res.data]);
        setUser({
          name: "",
          age: "",
          email: "",
        });
      });
    }

  };

  useEffect(() => {
    Axios.get(`${api}/users`).then((res) => {
      setUsers(res.data);
    });
  }, [users]);

  return (
    <>
      {users.map(({ _id, name, age, email }) => (
        <div className="card" key={_id}>
          <ul>
            <li>Name: {name}</li>
            <li>Age: {age}</li>
            <li>Email: {email}</li>
          </ul>
        </div>
      ))}

      <div>
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
        <button onClick={createUser}>Submit</button>
      </div>
    </>
  );
}

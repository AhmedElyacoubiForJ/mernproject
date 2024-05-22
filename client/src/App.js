import Axios from "axios";
import { useState, useEffect } from "react";
// https://jsonplaceholder.typicode.com/users

export default function App() {
  const [users, setUsers] = useState([]);
  
  Axios.get("http://localhost:5000/users").then((res) => {
    console.log(res.data);
  });

  /* const users = [
    {
      id: 1,
      name: "Nour",
      age: 20,
      email: "nourhomsi@live.com",
    },
    {
      id: 2,
      name: "Majeg",
      age: 25,
      email: "majidhomsi@live.com",
    },
    {
      id: 3,
      name: "Anas",
      age: 30,
      email: "anashomsi@live.com",
    },
  ]; */
  return (
    <>
      {/*  {users.map((user) => (
        <ul>
          <li>Name: {user.name}</li>
          <li>Age: {user.age}</li>
          <li>Email: {user.email}</li>
        </ul>
      ))} */}
    </>
  );
}

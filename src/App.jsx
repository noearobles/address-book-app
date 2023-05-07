import { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import Display from "./components/Display";

function App() {
  const [users, setUsers] = useState([]);

  useEffect(() => {
    (async function fetchUsers() {
      const data = [];
      const response = await axios("https://randomuser.me/api?results=25");

      response.data.results.forEach((user) => {
        data.push({
          name: user.name.first + " " + user.name.last,
          thumbnail: user.picture.large,
          email: user.email,
          username: user.login.username,
          registered: user.registered.date,
        });
      });
      setUsers(data);
    })();
  }, []);

  return (
    <ul style={{ listStyle: "none" }}>
      {users.map((user) => (
        <Display key={user.uuid} user={user} />
      ))}
    </ul>
  );
}

export default App;

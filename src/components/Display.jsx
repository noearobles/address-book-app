import { useState } from "react";

export default function Display({ user }) {
  const [show, toggleShow] = useState(false);
  return (
    <li>
      <img src={user.thumbnail} alt="user photo" />
      <div className="hero">
        <h3>{user.name}</h3>
      </div>
      <button onClick={() => toggleShow(!show)}>
        {show ? "Hide info" : "Show info"}
      </button>{" "}
      <div style={show ? { display: "none" } : { display: "block" }}></div>
      <div style={show ? { display: "block" } : { display: "none" }}>
        <p>email: {user.email}</p>
        <p>username: {user.username}</p>
        <p>
          date registered:{" "}
          {new Date(user.registered).toLocaleString("en-US", {
            day: "2-digit",
            month: "short",
            year: "numeric",
          })}
        </p>
      </div>
    </li>
  );
}

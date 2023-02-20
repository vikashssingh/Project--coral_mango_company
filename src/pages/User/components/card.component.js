import React from "react";

export default function CardComponent({ userList, filter }) {
  return (
    <div
      style={{
        display: "flex",
        gap: 10,
        flexWrap: "wrap",
      }}
    >
      {userList
        .filter(
          (d) =>
            d.name.toLowerCase().includes(filter.toLowerCase()) ||
            d.occupation.toLowerCase().includes(filter.toLowerCase())
        )
        .map((user, idx) => (
          <div class="card">
            <img
              src="https://mir-s3-cdn-cf.behance.net/projects/404/03bcbf84808917.Y3JvcCwxMjI0LDk1NywwLDE2Mw.png"
              alt="Avatar"
              style={{
                width: "100%",
              }}
            />
            <div class="card-container">
              <h4>
                <b>{user.name}</b>
              </h4>
              <div className="user-info">
                <p>{user.age} years</p>
                <p>{user.occupation}</p>
              </div>
            </div>
          </div>
        ))}
    </div>
  );
}

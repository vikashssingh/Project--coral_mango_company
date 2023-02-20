import React from "react";

export default function TabularViewComponent({ userList, filter }) {
  return (
    <div>
      <table class="content-table">
        <thead>
          <tr>
            <th>Name</th>
            <th>Age</th>
            <th>Occupation</th>
          </tr>
        </thead>
        <tbody>
          {userList
            .filter(
              (d) =>
                d.name.toLowerCase().includes(filter.toLowerCase()) ||
                d.occupation.toLowerCase().includes(filter.toLowerCase())
            )
            .map((bo, idx) => (
              <tr className={idx % 2 === 0 ? "" : "active-row"} key={idx}>
                <td>{bo.name}</td>
                <td>{bo.age}</td>
                <td>{bo.occupation}</td>
              </tr>
            ))}
        </tbody>
      </table>
    </div>
  );
}

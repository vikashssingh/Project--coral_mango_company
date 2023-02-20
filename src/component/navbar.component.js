/* eslint-disable jsx-a11y/anchor-is-valid */
import React from "react";
import { FaSignOutAlt } from "react-icons/fa";
import { useNavigate } from "react-router-dom";
import "../styles/components/navbar.css";

export default function NavbarComponent({ navList }) {
  const navigate = useNavigate();
  return (
    <div>
      {" "}
      <header>
        <nav class="navbar">
          <ul>
            {navList.map((el, idx) => (
              <li key={idx} className={`${el.active ? "li-active" : ""}`}>
                <a href="" onClick={el.action}>
                  {el.title}
                </a>
              </li>
            ))}
            <li
              style={{
                float: "right",
              }}
              onClick={(e) => {
                localStorage.removeItem("token");
                navigate("/");
              }}
            >
              <a href="">
                <FaSignOutAlt /> Logout
              </a>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  );
}

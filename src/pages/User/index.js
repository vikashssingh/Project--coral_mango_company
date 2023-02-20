import axios from "axios";
import React from "react";
import { useNavigate } from "react-router-dom";
import NavbarComponent from "../../component/navbar.component";
import endPoints from "../../config/endPoints";
import CommonFunctionalityComponent from "./components/commonFunctionality";
import TabularViewComponent from "./components/table.component";
import { FaTable, FaTicketAlt } from "react-icons/fa";
import CardComponent from "./components/card.component";
import "../../styles/pages/user/index.css";

export default function UserPage() {
  const token = localStorage.getItem("token");
  const navigate = useNavigate();
  const [userList, setUserList] = React.useState([]);
  const [filter, setFilter] = React.useState("");
  const [sort, setSort] = React.useState("");

  const [switchView, setSwitchView] = React.useState("table");

  const fetchUserDetails = () => {
    if (!token) {
      navigate("/");
    } else {
      axios.post(endPoints.getUserData, { token }).then((r) => {
        setUserList(r.data ? r.data : []);
      });
    }
  };

  React.useEffect(() => {
    fetchUserDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);
  return (
    <div>
      <NavbarComponent
        navList={[
          {
            title: (
              <>
                <FaTable /> Check Tabular View
              </>
            ),
            action: (e) => {
              e.preventDefault();
              setSwitchView("table");
            },
            active: switchView === "table",
          },
          {
            title: (
              <>
                <FaTicketAlt /> Check Card View
              </>
            ),
            action: (e) => {
              e.preventDefault();
              setSwitchView("card");
            },
            active: switchView === "card",
          },
        ]}
      />
      <div className="content-section">
        <CommonFunctionalityComponent
          filter={filter}
          setFilter={setFilter}
          sort={sort}
          userList={userList}
          setSort={setSort}
          setUserList={setUserList}
        />
        {/* View Section */}
        {switchView === "card" ? (
          <CardComponent userList={userList} filter={filter} />
        ) : (
          <TabularViewComponent userList={userList} filter={filter} />
        )}
      </div>
    </div>
  );
}

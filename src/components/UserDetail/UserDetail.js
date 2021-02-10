import React, { useEffect, useState } from "react";
import "./UserDetail.css";
import { Link } from "react-router-dom";
import { fetchUsers } from "../API/fetchUsers";

const UserDetail = () => {
  const [data, setData] = useState([]);

  useEffect(async () => {
    const data = await fetchUsers();
    setData(data);
  }, []);

  return (
    <div className="container">
      <h1
        className="text-center"
        style={{ color: "#ffffff", marginBottom: "1.7rem" }}
      >
        Available Users
      </h1>
      <h4>
        <table className="table table-hover">
          <tbody>
            <tr className="bg-default">
              <th>Name</th>
              <th>Email</th>
              <th>Account Type</th>
              <th>Balance</th>
              <th>
                <button className="unused-btn"></button>
              </th>
            </tr>

            {data.map((user, index) => (
              <tr key={index}>
                <td>{user.name}</td>
                <td>{user.email}</td>
                <td>{user.accountType}</td>
                <td>{user.balance}</td>
                <td>
                  <Link to={`/transfer/${user.name}`}>
                    <button className="btn btn-success">
                      <b> Transfer</b>
                    </button>
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </h4>
    </div>
  );
};

export default UserDetail;

import React, { useEffect, useState } from "react";
import { fetchUsers } from "../API/fetchUsers";
import { Link } from "react-router-dom";
import "./Transfer.css";

const Transfer = (props) => {
  const paramName = props.match.params.name;

  useEffect(async () => {
    const data = await fetchUsers();
    setUsers(data);
  }, []);

  const [users, setUsers] = useState([]);
  const [amount, setAmount] = useState(0);
  const [transferred, setTransferred] = useState(false);

  const transferMoney = async () => {
    await fetch(
      `http://localhost:5000/bank/transfer/${paramName}/${amount}`
    ).then((res) => res.json());

    setTransferred(true);
  };

  return (
    <div className="transaction-area">
      {transferred && (
        <div
          style={{ background: "transparent !important" }}
          className="jumbotron"
        >
          <h3 className="display-4" style={{ color: "green " }}>
            Congratulations, you have transferred money successfully!
          </h3>
          <hr className="my-4" />
          <p class="lead">Simple, Secure and Fast Transactions</p>
          <p className="lead">
            <Link to="/user-detail">
              <button className="btn btn-primary btn-lg">See Users</button>
            </Link>
          </p>
        </div>
      )}

      <h3>
        <table className="table transfer-card text-center ">
          <tbody>
            <tr>
              <td>
                <h1
                  className="transfer-title text-center"
                  style={{ color: "white" }}
                >
                  Transfer Money
                </h1>
              </td>
            </tr>
            <tr>
              <td>
                <b>Holder Name : {paramName}</b>
              </td>
            </tr>
            <tr>
              <td>
                <b>Amount : {""}</b>
                <input
                  type="number"
                  value={amount}
                  onChange={(e) => setAmount(e.currentTarget.value)}
                  name="amount"
                />
              </td>
            </tr>
            <tr>
              <td>
                <button
                  className="btn btn-success btn-transfer"
                  onClick={transferMoney}
                >
                  <b style={{ fontSize: "2.1rem" }}>Transfer</b>
                </button>
              </td>
            </tr>
          </tbody>
        </table>
      </h3>
    </div>
  );
};

export default Transfer;

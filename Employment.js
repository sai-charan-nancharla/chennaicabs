import React from "react";
import "./style.css";
import { useState, useEffect } from "react";
import { db } from "./firebase-config";
import {
  collection,
  getDocs,
  addDoc,
  deleteDoc,
  doc,
} from "firebase/firestore";

function Employment() {
  const [newEmpolyeeName, setNewEmpolyeeName] = useState("");
  const [newDOB, setNewDOB] = useState("");
  const [newEamilid, setNewEmailid] = useState("");
  const [newMobileNumber, setNewMobileNumber] = useState("");
  const [newEmpolyeeID, setNewEmpolyeeID] = useState("");

  const [users, setUsers] = useState([]);
  const usersCollectionRef = collection(db, "users");

  const createUser = async () => {
    await addDoc(usersCollectionRef, {
      EmpolyeeID: newEmpolyeeID,
      EmpolyeeName: newEmpolyeeName,
      DOB: newDOB,
      Emailid: newEamilid,
      MobileNumber: newMobileNumber,
    });
  };

  const deleteUser = async (id) => {
    const userDoc = doc(db, "users", id);
    await deleteDoc(userDoc);
  };

  useEffect(() => {
    const getUsers = async () => {
      const data = await getDocs(usersCollectionRef);
      setUsers(data.docs.map((doc) => ({ ...doc.data(), id: doc.id })));
    };
    getUsers();
  }, []);

  return (
    <div className="Employment">
      <nav class="main">
        <label class="head">Employee Details</label>
      </nav>
      <br></br>
      <center>
        <b> Name:</b>
        <input
          type="text"
          palceholder="Name..."
          onChange={(event) => {
            setNewEmpolyeeName(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <b>Date of Birth:</b>
        <input
          palceholder="DOB.."
          onChange={(event) => {
            setNewDOB(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <b>Email ID:</b>
        <input
          palceholder="Emailid.."
          onChange={(event) => {
            setNewEmailid(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <b>Mobile Number:</b>
        <input
          palceholder="Mobile Number.."
          onChange={(event) => {
            setNewMobileNumber(event.target.value);
          }}
        />
        <br></br>
        <br></br>
        <button onClick={createUser}>Create EmployeeID</button>
        <br></br>
      </center>
      <center>
        <br></br>
        <table border="3">
          <tr>
            <th>Employee Name</th>
            <th>Date of Birth</th>
            <th>Email Address</th>
            <th>Mobile Number</th>
            <th>Select the option</th>
            <th>Update Option</th>
          </tr>
          {users.map((user) => {
            return (
              <tr>
                <td>{user.EmpolyeeName}</td>
                <td>{user.DOB}</td>
                <td>{user.Emailid}</td>
                <td>{user.MobileNumber}</td>
                <td>
                  <button
                    onClick={() => {
                      deleteUser(user.id);
                    }}
                  >
                    Delete ID
                  </button>
                </td>
                <td>
                  Filed:
                  <input type="text" />
                  Value:
                  <input
                    type="text"
                    onChange={(event) => {
                      setNewEmpolyeeName(event.target.value);
                    }}
                  />
                  <br></br>
                  <center>
                    <button>Update Employee</button>
                  </center>
                </td>
              </tr>
            );
          })}
        </table>
      </center>
    </div>
  );
}

export default Employment;

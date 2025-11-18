import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

const ViewContacts = () => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch( `${process.env.REACT_APP_API_URL}/contact/all`)
      .then(res => res.json())
      .then(setData);
  }, []);

  return (
    <>
      <AdminNavbar />

      <div className="container mt-5">
        <h2 className="fw-bold mb-3">Contact Form Responses</h2>

        <table className="table table-bordered table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Mobile</th>
              <th>City</th>
            </tr>
          </thead>
          <tbody>
            {data.map((c) => (
              <tr key={c._id}>
                <td>{c.fullName}</td>
                <td>{c.email}</td>
                <td>{c.mobile}</td>
                <td>{c.city}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewContacts;

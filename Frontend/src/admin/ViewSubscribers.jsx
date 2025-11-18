import React, { useEffect, useState } from "react";
import AdminNavbar from "./AdminNavbar";

const ViewSubscribers = () => {
  const [subs, setSubs] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/newsletter/all")
      .then(res => res.json())
      .then(setSubs);
  }, []);

  return (
    <>
      <AdminNavbar />

      <div className="container mt-5">
        <h2 className="fw-bold mb-3">Newsletter Subscribers</h2>

        <table className="table table-bordered table-striped shadow">
          <thead className="table-dark">
            <tr>
              <th>Email</th>
            </tr>
          </thead>
          <tbody>
            {subs.map((s) => (
              <tr key={s._id}>
                <td>{s.email}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </>
  );
};

export default ViewSubscribers;

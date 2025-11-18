import React from "react";
import AdminNavbar from "./AdminNavbar";

const AdminHome = () => {
  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <h2 className="fw-bold">Welcome Admin</h2>
        <p>Use the above menu to manage projects, clients, contacts and newsletter.</p>
      </div>
    </>
  );
};

export default AdminHome;

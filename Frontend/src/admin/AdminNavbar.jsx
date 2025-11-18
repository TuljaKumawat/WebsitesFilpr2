import React from "react";
import { Link } from "react-router-dom";

const AdminNavbar = () => {
  return (
    <nav className="navbar navbar-dark bg-dark px-4">
      <h3 className="text-light">Admin Panel</h3>

      <div>
        <Link className="btn btn-outline-light me-2" to="/admin/add-project">Add Project</Link>
        <Link className="btn btn-outline-light me-2" to="/admin/add-client">Add Client</Link>
        <Link className="btn btn-outline-light me-2" to="/admin/contacts">Contacts</Link>
        <Link className="btn btn-outline-light" to="/admin/subscribers">Subscribers</Link>
      </div>
    </nav>
  );
};

export default AdminNavbar;

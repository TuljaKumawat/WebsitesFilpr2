import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const AddClient = () => {
  const [imageFile, setImageFile] = useState(null);
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [designation, setDesignation] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageFile || !name || !description || !designation) {
      alert("Please fill all fields and choose an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile); // field name must be 'image' (matches upload.single)
    formData.append("name", name);
    formData.append("description", description);
    formData.append("designation", designation);

    
    fetch(`${process.env.REACT_APP_API_URL}/clients/add`, {
      method: "POST",
      body: formData
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Failed to add client");
        alert("Client added!");
        setImageFile(null);
        setName("");
        setDescription("");
        setDesignation("");
        // optionally refresh list or navigate
      })
      .catch(err => {
        console.error("AddClient error:", err);
        alert("Error: " + err.message);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <h2 className="fw-bold mb-3">Add Client</h2>

        <form className="card p-4 shadow" onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            className="form-control mb-3"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
          />

          <input
            placeholder="Client Name"
            className="form-control mb-3"
            value={name}
            onChange={(e) => setName(e.target.value)}
            required
          />

          <textarea
            placeholder="Description"
            className="form-control mb-3"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          />

          <input
            placeholder="Designation (CEO, Developer...)"
            className="form-control mb-3"
            value={designation}
            onChange={(e) => setDesignation(e.target.value)}
            required
          />

          <button className="btn btn-primary">Add Client</button>
        </form>
      </div>
    </>
  );
};

export default AddClient;

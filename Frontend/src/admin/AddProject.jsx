import React, { useState } from "react";
import AdminNavbar from "./AdminNavbar";

const AddProject = () => {
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [imageFile, setImageFile] = useState(null);

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!imageFile) {
      alert("Please choose an image");
      return;
    }

    const formData = new FormData();
    formData.append("image", imageFile);
    formData.append("name", name);
    formData.append("description", description);

    fetch( `${process.env.REACT_APP_API_URL}/projects/add`, {
      method: "POST",
      body: formData
    })
      .then(async (res) => {
        const data = await res.json();
        if (!res.ok) throw new Error(data.message || "Upload failed");
        alert("Project Added!");
        setName("");
        setDescription("");
        setImageFile(null);
        // optional: redirect or refresh projects
      })
      .catch(err => {
        console.error("Upload error:", err);
        alert("Error: " + err.message);
      });
  };

  return (
    <>
      <AdminNavbar />
      <div className="container mt-5">
        <h2 className="fw-bold mb-3">Add Project</h2>

        <form className="card p-4 shadow" onSubmit={handleSubmit}>
          <input
            type="file"
            accept="image/*"
            className="form-control mb-3"
            onChange={(e) => setImageFile(e.target.files[0])}
            required
          />

          <input
            placeholder="Project Name"
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

          <button className="btn btn-primary">Add Project</button>
        </form>
      </div>
    </>
  );
};

export default AddProject;

import React, { useEffect, useState } from "react";

const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    fetch(`${process.env.REACT_APP_API_URL}/projects/project`)
      .then(res => res.json())
      .then(data => setProjects(data))
      .catch(err => console.error("Fetch projects error:", err));
  }, []);

  return (
    <section id="projects" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Our Projects</h2>

        <div className="row g-4">
          {projects.map((p) => (
            <div className="col-md-4" key={p._id}>
              <div className="card shadow">
                <img
                  src={p.image}
                  className="card-img-top"
                  alt={p.name}
                  style={{ height: "200px", objectFit: "cover" }}
                  onError={(e) => { e.target.src = "/placeholder.png"; }} // optional placeholder
                />
                <div className="card-body">
                  <h5 className="fw-bold">{p.name}</h5>
                  <p>{p.description}</p>
                  <button className="btn btn-outline-primary">Read More</button>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Projects;

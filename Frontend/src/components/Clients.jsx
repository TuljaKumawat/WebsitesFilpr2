import React, { useEffect, useState } from "react";

const Clients = () => {
  const [clients, setClients] = useState([]);

  useEffect(() => {
   // fetch("http://localhost:5000/clients/all")
    fetch(`${process.env.REACT_APP_API_URL}/clients`)
      .then(res => res.json())
      .then(data => setClients(data))
      .catch(err => console.error("Fetch clients error:", err));
  }, []);

  return (
    <section id="clients" className="py-5">
      <div className="container">
        <h2 className="text-center mb-4 fw-bold">Happy Clients</h2>

        <div className="row g-4">
          {clients.map(c => (
            <div className="col-md-4" key={c._id}>
              <div className="card shadow text-center p-3">
                <img
                  src={c.image}
                  className="rounded-circle mx-auto"
                  width="120"
                  height="120"
                  alt={c.name}
                  style={{ objectFit: "cover" }}
                  onError={(e) => { e.target.onerror = null; e.target.src = "/placeholder.png"; }}
                />

                <h5 className="fw-bold mt-3">{c.name}</h5>
                <p>{c.description}</p>
                <small className="text-muted">{c.designation}</small>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Clients;

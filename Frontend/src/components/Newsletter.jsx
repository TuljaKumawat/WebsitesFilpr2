import React, { useState } from "react";

const Newsletter = () => {
  const [email, setEmail] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/newsletter/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify({ email })
    })
    .then(() => {
      alert("Subscribed!");
      setEmail("");
    });
  };

  return (
    <section id="subscribe" className="py-5 text-center bg-dark text-light">
      <div className="container">

        <h2 className="fw-bold mb-3">Subscribe to our newsletter</h2>

        <form onSubmit={handleSubmit} className="input-group w-50 mx-auto">
          <input type="email" required className="form-control"
            placeholder="Enter your email"
            value={email}
            onChange={e=>setEmail(e.target.value)} />

          <button className="btn btn-primary">Subscribe</button>
        </form>

      </div>
    </section>
  );
};

export default Newsletter;

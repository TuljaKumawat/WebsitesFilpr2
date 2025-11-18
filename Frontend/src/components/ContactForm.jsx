import React, { useState } from "react";

const ContactForm = () => {
  const [form, setForm] = useState({ fullName:"", email:"", mobile:"", city:"" });

  const handleSubmit = (e) => {
    e.preventDefault();

    fetch("http://localhost:5000/contact/add", {
      method: "POST",
      headers: {"Content-Type":"application/json"},
      body: JSON.stringify(form)
    })
    .then(res => res.json())
    .then(() => {
      alert("Form Submitted!");
      setForm({ fullName:"", email:"", mobile:"", city:"" });
    });
  };

  return (
    <section id="contact" className="py-5 bg-light">
      <div className="container">
        <h2 className="text-center fw-bold mb-4">Contact Us</h2>

        <div className="row justify-content-center">
          <div className="col-md-6">

            <form onSubmit={handleSubmit} className="card p-4 shadow">

              <input placeholder="Full Name" className="form-control mb-3"
                value={form.fullName}
                onChange={(e)=>setForm({...form, fullName:e.target.value})} />

              <input placeholder="Email" className="form-control mb-3"
                value={form.email}
                onChange={(e)=>setForm({...form, email:e.target.value})} />

              <input placeholder="Mobile" className="form-control mb-3"
                value={form.mobile}
                onChange={(e)=>setForm({...form, mobile:e.target.value})} />

              <input placeholder="City" className="form-control mb-3"
                value={form.city}
                onChange={(e)=>setForm({...form, city:e.target.value})} />

              <button className="btn btn-primary w-100">Submit</button>
            </form>

          </div>
        </div>

      </div>
    </section>
  );
};

export default ContactForm;

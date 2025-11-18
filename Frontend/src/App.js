
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Home from "./components/Home";

import AdminHome from "./admin/AdminHome";
import AddProject from "./admin/AddProject";
import AddClient from "./admin/AddClient";
import ViewContacts from "./admin/ViewContacts";
import ViewSubscribers from "./admin/ViewSubscribers";

function App() {
  return (
    <Router>
      <Routes>
        {/* USER SIDE */}
        <Route path="/" element={<Home />} />

        {/* ADMIN SIDE */}
        <Route path="/admin" element={<AdminHome />} />
        <Route path="/admin/add-project" element={<AddProject />} />
        <Route path="/admin/add-client" element={<AddClient />} />
        <Route path="/admin/contacts" element={<ViewContacts />} />
        <Route path="/admin/subscribers" element={<ViewSubscribers />} />
      </Routes>
    </Router>
  );
}

export default App;


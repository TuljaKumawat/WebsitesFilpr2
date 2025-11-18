const express = require('express');
const app = express();
const cors = require('cors');
require('dotenv').config();
require('./dbconfiguration/dbconfig');


app.use(cors({
  origin: "https://websitesfilp.onrender.com",
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use(express.json());        // parse JSON bodies

// serve uploaded images publicly
app.use('/uploads', express.static('uploads'));

// routers
app.use('/projects', require('./router/projectrouter'));
app.use('/contact', require('./router/contactrouter'));
app.use('/clients', require('./router/clientrouter'));
app.use('/newsletter', require('./router/newsletterrouter'));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on ${PORT}`));

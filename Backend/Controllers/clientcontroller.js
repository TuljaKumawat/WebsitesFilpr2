
const Client = require('../models/client');

exports.addClient = async (req, res) => {
    try {
        // If using file upload, multer will put file in req.file
        // Accept both: if file present use file -> url, else accept image string in body
        let imageUrl = "";

        if (req.file) {
            imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;
        } else if (req.body.image) {
            imageUrl = req.body.image;
        }

        const { name, description, designation } = req.body;

        if (!imageUrl || !name || !description || !designation) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newClient = new Client({ image: imageUrl, name, description, designation });
        await newClient.save();
        res.status(201).json({ message: "Client added successfully", data: newClient });
    } catch (error) {
        console.error("addClient error:", error);
        res.status(500).json({ message: error.message });
    }
};

exports.getClients = async (req, res) => {
    try {
        const clients = await Client.find().sort({ createdAt: -1 });
        res.status(200).json(clients);
    } catch (error) {
        console.error("getClients error:", error);
        res.status(500).json({ message: error.message });
    }
};


const Contact = require('../models/contact');

// Add Contact Form Data
exports.addContact = async (req, res) => {
    try {
        const { fullName, email, mobile, city } = req.body;

        if (!fullName || !email || !mobile || !city) {
            return res.status(400).json({ message: "All fields are required" });
        }

        const newContact = new Contact({
            fullName,
            email,
            mobile,
            city
        });

        await newContact.save();
        return res.status(201).json({ message: "Form submitted successfully", data: newContact });

    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

// Get All Contact Form Data (Admin Panel)
exports.getContacts = async (req, res) => {
    try {
        const contacts = await Contact.find().sort({ createdAt: -1 });
        return res.status(200).json(contacts);
    } catch (err) {
        return res.status(500).json({ message: err.message });
    }
};

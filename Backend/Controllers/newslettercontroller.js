const Newsletter = require("../models/newsletter");

// Add Subscriber
exports.addSubscriber = async (req, res) => {
    try {
        const { email } = req.body;

        if (!email) {
            return res.status(400).json({ message: "Email is required" });
        }

        const subscriber = new Newsletter({ email });
        await subscriber.save();

        res.status(201).json({ message: "Subscribed successfully", data: subscriber });

    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

// Get all subscribers
exports.getSubscribers = async (req, res) => {
    try {
        const subs = await Newsletter.find().sort({ createdAt: -1 });
        res.json(subs);
    } catch (err) {
        res.status(500).json({ message: err.message });
    }
};

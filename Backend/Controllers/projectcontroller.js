const Project = require('../models/project');
const fs = require('fs');
const path = require('path');

exports.addProject = async (req, res) => {
    try {
        // multer puts file at req.file
        if (!req.file) return res.status(400).json({ message: "Image file is required" });

        const { name, description, link } = req.body;
        if (!name || !description) return res.status(400).json({ message: "name and description required" });

        // create public URL for frontend
        const imageUrl = `${req.protocol}://${req.get('host')}/uploads/${req.file.filename}`;

        const project = new Project({ image: imageUrl, name, description, link });
        await project.save();

        return res.status(201).json({ message: "Project added", data: project });
    } catch (err) {
        console.error("addProject error:", err);
        return res.status(500).json({ message: err.message });
    }
};

exports.getProjects = async (req, res) => {
    try {
        const projects = await Project.find().sort({ createdAt: -1 });
        return res.status(200).json(projects);
    } catch (err) {
        console.error("getProjects error:", err);
        return res.status(500).json({ message: err.message });
    }
};

exports.getProjectById = async (req, res) => {
    try {
        const project = await Project.findById(req.params.id);
        if (!project) return res.status(404).json({ message: "Not found" });
        return res.status(200).json(project);
    } catch (err) {
        console.error("getProjectById error:", err);
        return res.status(500).json({ message: err.message });
    }
};

exports.deleteProject = async (req, res) => {
    try {
        const project = await Project.findByIdAndDelete(req.params.id);
        if (!project) return res.status(404).json({ message: "Not found" });

        // remove file from /uploads (project.image expected like http://host/uploads/filename.ext)
        try {
            const url = new URL(project.image);
            const filename = path.basename(url.pathname); // e.g. uploads/12345.png -> 12345.png
            const filePath = path.join(__dirname, "..", "uploads", filename);
            if (fs.existsSync(filePath)) fs.unlinkSync(filePath);
        } catch (e) {
            // ignore file delete errors
            console.warn("Could not delete file:", e.message);
        }

        return res.status(200).json({ message: "Deleted", data: project });
    } catch (err) {
        console.error("deleteProject error:", err);
        return res.status(500).json({ message: err.message });
    }
};

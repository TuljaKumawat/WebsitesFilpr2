const mongoose = require('mongoose');

const projectSchema = new mongoose.Schema({
    image: {        // store image URL or local path returned by multer
        type: String,
        required: true
    },
    name: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    // optional: link or tags
    link: {
        type: String,
        default: ''
    }
}, { timestamps: true });

module.exports = mongoose.model('Project', projectSchema);

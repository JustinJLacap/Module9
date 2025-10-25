const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const postSchema = new Schema({
    title: { type: String, trim: true, required: true },
    description: { type: String, trim: true, required: true },
    imgURL: {type: String, trim: true},
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    userID: { type: Schema.Types.ObjectId, ref: 'user', required: true }
});

module.exports = mongoose.model("post", postSchema);
const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const commentSchema = new Schema({
    body: { type: String, trim: true, required: true },
    createdAt: { type: Date, default: Date.now },
    updatedAt: { type: Date, default: Date.now },
    userID: { type: Schema.Types.ObjectId, ref: 'user', required: true },
    postID: { type: Schema.Types.ObjectId, ref: 'post', required: true }
});

module.exports = mongoose.model("comment", commentSchema);
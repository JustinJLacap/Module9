const express = require("express");
const app = express();
require("dotenv").config();

const dbConnect = require("./dbConnect");

app.use(express.json());

const userRoutes = require('./routes/userRoutes');
const postRoutes = require('./routes/postRoutes');
const commentRoutes = require('./routes/commentRoutes');

app.use('/api/posts', postRoutes);
app.use('/api/users', userRoutes);
app.use('/api/comments', commentRoutes);

app.get("/", (req, res) => {
    res.json({
        message: "Welcome to my MySQL application."
    });
});
 
    const PORT = process.env.PORT || 8080;
    app.listen(PORT, () => {
        console.log(`Server is running on port ${PORT}.`);
    });
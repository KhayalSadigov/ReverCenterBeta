// Import Package
const express = require("express");
const mongoose = require("mongoose");
const bodyParser = require("body-parser");
const cors = require("cors");
const endpoints = require("./Constants/endpoints");
const courseController = require("./Controllers/courses.controller");
const app = express();

// Import Constant
const port = 2121;
const URL =
"mongodb+srv://reveraca1:wpvyciSgZEd8VLas@revercenter.fbkszho.mongodb.net/?retryWrites=true&w=majority&appName=ReverCenter";

// Use Package
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());
app.use(cors());

// Routing
const blogRouter = require('./Routes/blogs.routes')
const courseRouter = require('./Routes/courses.routes');
const messageRouter = require("./Routes/messages.routes");
const postRouter = require("./Routes/posts.routes");
const serviceRouter = require("./Routes/services.routes");
const userRouter = require("./Routes/users.routes");
const workRouter = require("./Routes/works.routes");
const mailRouter = require("./Routes/mails.routes");


app.use(blogRouter)
app.use(courseRouter)
app.use(messageRouter)
app.use(postRouter)
app.use(serviceRouter)
app.use(userRouter)
app.use(workRouter)
app.use(mailRouter)




// Config
mongoose.connect(URL).then(() => {
  console.log("Connected!");
  app.listen(port, () => {
    console.log(`Example app listening on port ${port}`);
  });
});

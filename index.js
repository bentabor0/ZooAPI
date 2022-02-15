import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";
import cookieParser from "cookie-parser";
var path = require('path');
import cors from "cors";

const app = express();
const PORT = 5000;

// mongoose connection
mongoose.Promise = global.Promise;
mongoose.connect('mongodb+srv://bentabor:Bent1998@zooapi-database.yufht.mongodb.net/zoo-db?retryWrites=true&w=majority', {
    useNewUrlParser: true,
    useUnifiedTopology: true
});

// bodyParser setup 
app.use(bodyParser.urlencoded({ extended: true }));
app.use(bodyParser.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, 'public')));
app.use(cors());

let indexHTML = `<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Zoo Api</title>
</head>
<body>
    <h1>Welcome to zoo api</h1>
</body>
</html>`

routes(app);

app.get('/', (req, res) => {
    res.send(indexHTML);
    console.log('home page hit');
});

app.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);

module.exports = app;
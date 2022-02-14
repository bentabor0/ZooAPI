import express from "express";
import routes from "./src/routes/crmRoutes";
import mongoose from "mongoose";
import bodyParser from "body-parser";

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

routes(app);

app.get('/', (req, res) => 
    res.send(`ZOO Node and express server running on port ${PORT}`)
);

app.listen(PORT, () =>
    console.log(`server is running on port ${PORT}`)
);
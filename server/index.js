require("dotenv").config();

const express = require("express");
const MongoClient = require("mongodb").MongoClient;
const bodyParser = require("body-parser");

const PORT = process.env.PORT;
const app = express();

app.use(bodyParser.json());
const cors = require("cors");
app.use(cors());

// Connect to the database
MongoClient.connect(process.env.DATABASE_CONNECTION_STRING)
  .then((client) => {
    const db = client.db(process.env.MONGO_DB_NAME);
    // IMPORT YOUR API ROUTES HERE
    // Below is just an example. Don't forget to delete it.
    // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use

    // db.collection("travelbuddy_db").find({
    //   // $and: [
    //   //   { "attributes.name": "typeOfTraveler", "attributes.value": "4" },
    //   //   { "attributes.name": "nextLocation", "attributes.value": "true" },
    //   // ],
    // });

    require("./routes/profilesRoutes")(app, db);
    require("./routes/profilesRequestRoutes")(app, db);

    app.listen(PORT, () => {
      console.log(`API running on port ${PORT}`);
    });
  })
  .catch((err) => {
    console.error("Error: ", err);
  });

// require("dotenv").config();

// const express = require("express");
// const mongoose = require("mongoose");
// const bodyParser = require("body-parser");

// // IMPORT YOUR SCHEMAS HERE
// require("./models/Profiles"); //This is just an example. Don't forget to delete this

// const app = express();

// // This is where your API is making its initial connection to the database
// mongoose.Promise = global.Promise;
// mongoose.set("strictQuery", false);
// mongoose.connect(process.env.DATABASE_CONNECTION_STRING, {
//   useNewUrlParser: true,
// });

// app.use(bodyParser.json());

// // IMPORT YOUR API ROUTES HERE
// // Below is just an example. Don't forget to delete it.
// // It's importing and using everything from the profilesRoutes.js file and also passing app as a parameter for profileRoutes to use
// require("./routes/profilesRoutes")(app);

// const PORT = process.env.PORT;
// app.listen(PORT, () => {
//   console.log(`API running on port ${PORT}`);
// });

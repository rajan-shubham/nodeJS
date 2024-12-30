const {MongoClient} = require("mongodb");

// Connection URL
const URL = "mongodb+srv://myDatabaseUser:D1fficultP%40ssw0rd@mongodb0.example.com/?authSource=admin&replicaSet=myRepl";
const client = new MongoClient(URL);

// Database name
const dbName = "rajanMongo";


// NOTES
// go to mongoDB website
// create a free M0 cluster
// create a user
// Get the connection string
// install mongoDb compass

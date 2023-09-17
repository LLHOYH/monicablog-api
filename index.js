require("dotenv").config({ path: __dirname + "/keys.env" });

const express = require("express");
const cors = require("cors");
const app = express();
const { MongoClient, ServerApiVersion } = require("mongodb");

const { uniqueAlbums, dummyImageList } = require("./dummy_data.js");
const uri = process.env.DB_CONNECTION_STRING;

// Create a MongoClient with a MongoClientOptions object to set the Stable API version
const client = new MongoClient(uri, {
  serverApi: {
    version: ServerApiVersion.v1,
    strict: true,
    deprecationErrors: true,
  },
});

const corsAllowedOrigin = [
  "http://localhost",
  "http://localhost:3000",
  "https://monicablog-api.vercel.app/",
];

const corsHeader = {
  "Access-Control-Allow-Origin": "*",
};

const corsOptions = {
  origin: (origin, callback) => {
    if (corsAllowedOrigin.includes(origin) || !origin) {
      callback(null, true);
    } else {
      callback(new Error(`Origin ${origin} not allowed!`));
    }
  },
};
app.use(cors(corsOptions));

app.set("port", process.env.PORT || 3000);
app.listen(app.get("port"), function () {
  console.log(`listening to port ${app.get("port")}`);
});

async function testConnection() {
  try {
    // Connect the client to the server	(optional starting in v4.7)
    await client.connect();
    // Send a ping to confirm a successful connection
    await client.db("admin").command({ ping: 1 });
    console.log(
      "Pinged your deployment. You successfully connected to MongoDB!"
    );
  } catch (err) {
    console.log(err.message);
  } finally {
    // Ensures that the client will close when you finish/error
    // await client.close();
  }
}
// testConnection();

async function connectDB() {
  try {
    await client.connect();
    return client.db("monicablog");
  } catch (err) {
    console.log(err.message);
  }
}

async function InsertImageList() {
  try {
    let db = await connectDB();
    let col = await db.collection("images");
    let result = await col.insertMany(dummyImageList);
  } catch (err) {
    console.log(err.message);
  }
}

async function InsertAlbums() {
  try {
    let db = await connectDB();
    let col = await db.collection("albums");
    let result = await col.insertMany(uniqueAlbums);
  } catch (err) {
    console.log(err.message);
  }
}

app.get("/", (req, res) => {
  res.send("Welcome to API");
});

app.get("/GetImageList", (req, res) => {
  async function GetImageList() {
    try {
      let db = await connectDB();
      console.log(db);
      let col = await db.collection("images");
      let result = await col.find().toArray();
      //this result is an array,
      //therefore need to wrap this in an object
      res.json({ result });
    } catch (err) {
      console.log(err.message);
    }
  }

  GetImageList();
});

app.get("/GetAlbums", (req, res) => {
  async function GetAlbums() {
    try {
      let db = await connectDB();
      let col = await db.collection("albums");
      let result = await col.find().toArray();
      //this result is an array,
      //therefore need to wrap this in an object
      res.json({ result });
    } catch (err) {
      console.log(err.message);
    }
  }

  GetAlbums();
});

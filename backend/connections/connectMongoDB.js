const { MongoClient, ServerApiVersion } = require("mongodb");
const client = new MongoClient(process.env.DB, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
  serverApi: ServerApiVersion.v1,
});

const tasksCollection = client.db("SEOTASK").collection("task");

const connectDB = () => {
  client.connect((err) => {
    if (err) {
      console.log(err.message);
    } else {
      console.log("Database connected successfully");
    }
  });
};

module.exports = {
  connectDB,
  tasksCollection,
};

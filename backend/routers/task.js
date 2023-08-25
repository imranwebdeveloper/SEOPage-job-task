var router = require("express").Router();
const { tasksCollection } = require("../connections/connectMongoDB");
const { ObjectId } = require("mongodb");

router.get("/tasks", async (req, res) => {
  const tasks = await tasksCollection.find({}).toArray();
  res.status(200).send(tasks);
});

router.post("/tasks/:id", async (req, res) => {
  const id = req.params.id;
  const new_attachment_count = req.body.files;

  const filter = { _id: new ObjectId(id) };

  const existingTask = await tasksCollection.findOne(filter);

  if (!existingTask) {
    return res.send({ message: "Task not found" });
  }

  const previous_attachment_count = existingTask.attachment_count || 0;

  const options = { upsert: true };

  const updated_attachment_count =
    previous_attachment_count + new_attachment_count;

  const writeOptions = await tasksCollection.updateOne(
    filter,
    { $set: { attachment_count: updated_attachment_count } },
    options
  );

  res.status(200).send(writeOptions);
});

module.exports = router;

const LogEntry = require('../models/LogEntry');

const logs_post = async (req, res) => {
  const data = req.body;

  console.log(data);

  try {
    const result = await LogEntry.create(data);

    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

const logs_get = async (req, res) => {
  try {
    const result = await LogEntry.find();

    res.send(result);
  } catch (err) {
    res.send(err);
  }
};

module.exports = {
  logs_post,
  logs_get,
};

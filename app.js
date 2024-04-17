const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
const port = process.env.PORT || 3000;

app.use(cors());
app.use(bodyParser.json());

app.get('/', (req, res) => {
  res.send('DayFlow Scheduler Backend is running');
});

app.listen(port, () => {
  console.log(`Server running on http://localhost:${port}`);
});

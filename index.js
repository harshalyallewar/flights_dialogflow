const express = require('express');
const dotenv = require('dotenv');

dotenv.config();

const app = express();

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use((req, res, next) => {
  console.log(`Path ${req.path} with method ${req.method}`);
  next();
});

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  res.send("Harshal").sendStatus(200);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});

const express = require('express');
const dotenv = require('dotenv');
const cors = require('cors');

dotenv.config();

const app = express();

app.use(
  cors({
    origin: "*", 
  })
);

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.post('/webhook', (req, res) => {
  console.log(JSON.stringify(req.body, null, 2));

  const fulfillmentResponse = {
      fulfillmentMessages: [
          {
              text: {
                  text: ['Response from Dialogflow CX Webhook'],
                  redactedText: ['Response from Dialogflow CX Webhook']
              }
          }
      ],
      responseType: "ENTRY_PROMPT",
      source: "VIRTUAL_AGENT"
  };

  res.json(fulfillmentResponse);
});

app.use((req, res, next) => {
  console.log(`Path ${req.path} with method ${req.method}`);
  next();
});

const PORT = process.env.PORT || 5000;

app.get('/', (req, res) => {
  console.log(req.body);
  res.send("Harshal").status(200);
});

app.listen(PORT, () => {
  console.log(`Server is running at http://127.0.0.1:${PORT}`);
});

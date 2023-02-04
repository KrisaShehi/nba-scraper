const express = require('express');
const app = express();
const { allPlayers } = require('./controllers/players');

app.use(express.json());
const port = process.env.PORT || 4000;

app.get('/', (req, res) => {
  res.send('it works!');
});

app.get('/api/nba', (req, res) => {
  res.send('Hello World')
});

app.listen(port, (() => {
  console.log(`Server is listening on port ${port}...`);
}))
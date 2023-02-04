const express = require('express');
const app = express();
const nbaRoute = require('./routes/players');

app.use(express.json());
const port = process.env.PORT || 4000;

app.use('/api/nba', nbaRoute);

app.listen(port, (() => {
  console.log(`Server is listening on port ${port}...`);
}))
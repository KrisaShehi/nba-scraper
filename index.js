const express = require('express');
const app = express();
const nbaRoute = require('./routes/players');

app.use(express.json());
const port = process.env.PORT || 4000;

app.use('/api/nba', nbaRoute);

app.listen(port, (() => {
  console.log(`Server is listening on port ${port}...`);
}))

// const getPostTitle = async () => {
//   const { data } = await axios.get("https://www.nba.com/players");
//   const $ = cheerio.load(data);
//   const postTitles = [];
//   const players = [];

//   $("tr").each((_idx, el) => {
//     const postTitle = $(el).text();
//     const split = postTitle.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);
//     postTitles.push(split);
//   });
//   postTitles.forEach((item) => {
//     const division = divisions[item[2]];
//     players.push({
//         fullName: `${item[0]} ${item[1]}`,
//         team: item[2],
//         number: item[3],
//         position: item[4],
//         division: division?.div,
//         height: `${item[5]} feet ${item[6].slice(0, 1)}`,
//     })
//   });
//   return players;
// };

// getPostTitle().then((postTitles) => console.log(postTitles));


// const getPostTitle = async () => {
  // const { data } = await axios.get("https://www.basketball-reference.com/teams/BOS/2023.html");
  // const $ = cheerio.load(data);
  // const postTitles = [];
  // const players = [];

  // $("#roster tr").each((_idx, el) => {
    // const postTitle = $(el).text();
    // const split = postTitle.match(/[A-Z]+(?![a-z])|[A-Z]?[a-z]+|\d+/g);
    // postTitles.push(postTitle);
  // });
  // postTitles.forEach((item) => {
  //   const division = divisions[item[2]];
  //   players.push({
  //       fullName: `${item[0]} ${item[1]}`,
  //       team: item[2],
  //       number: item[3],
  //       position: item[4],
  //       division: division?.div,
  //       height: `${item[5]} feet ${item[6].slice(0, 1)}`,
  //   })
  // });
  // return postTitles;
// };

// getPostTitle().then((postTitles) => console.log(postTitles));
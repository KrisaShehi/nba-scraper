const axios = require("axios");
const cheerio = require("cheerio");
const divisions = require("../helper/divisionMapping");

const getPlayers = async () => {
  const { data } = await axios.get('https://basketball.realgm.com/nba/players');
  const $ = cheerio.load(data);
  const players = [];
  $('tbody > tr').each((index, element) => {
    const number = $(element).find("[data-th='#']").text();
    const name = $(element).find("[data-th='Player']").text();
    const postion = $(element).find("[data-th='Pos']").text();
    const height = $(element).find("[data-th='Height']").text();
    const age = $(element).find("[data-th='Age']").text();
    const team = $(element).find("[data-th='Current Team']").text(); 
    if (name.length > 0) {
      players.push(
        {
          [name]: {
            name,
            number,
            postion,
            height,
            team,
            age,
            conf: divisions[team].conf,
            division: divisions[team].div,
          }
        }
      );
    }
  });
  return players;
}

const allPlayers = async (req, res) => {
  const players = await getPlayers();
  res.status(200).json({ players });
}

module.exports = {
    allPlayers,
}
const cheerio = require('cheerio');

const URL = 'https://www.25kfantasy.com/players/';

// const getScores = async () => {
//   const $ = await cheerio.fromURL(URL);
// }

const doSomething = () => {
  console.log('did something');
}
 
const players = [
  {
    name: 'Alex',
    draftedPlayers: [
      {
        playerName: 'Bryce Yockey',
        score: 0
      },
      {
        playerName: 'Maxx Coleman',
        score: 0
      },
      {
        playerName: 'Dan Zack',
        score: 0
      },
      {
        playerName: 'John Hennigan',
        score: 0
      },
      {
        playerName: 'Sean Winter',
        score: 0
      },
      {
        playerName: 'Jason Koon',
        score: 0,
      },
      {
        playerName: 'Brian Hastings',
        score: 0
      },
      {
        playerName: 'Sergio Aido',
        score: 0
      },
      {
        playerName: 'Aleksejs Ponakovs',
        score: 0
      }
    ]
  }
];

getScores();

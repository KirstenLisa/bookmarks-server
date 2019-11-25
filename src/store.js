const uuid = require('uuid/v4')

const bookmarks = [
  {
    id: uuid(),
    title: 'Spiegel',
    url: 'https://www.spiegel.de',
    description: 'News',
    rating: 5
  },
  {
    id: uuid(),
    title: 'Twitter',
    url: 'https://www.twitter.com',
    description: 'Good when bored',
    rating: 4
  },
  {
    id: uuid(),
    title: 'Stackoverflow',
    url: 'https://stackoverflow.com/',
    description: 'Good when stuck',
    rating: 5
  },
]

module.exports = { bookmarks }
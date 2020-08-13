const axios = require('axios');
const cheerio = require('cheerio');
const fs = require('fs');

const url = 'https://time.com/';

const goForTheStories = async (url) => {
  try {
    const getData = await axios.get(url);
    if (getData.status === 200) {
      const html = getData.data;
      const $ = cheerio.load(html);
      const stories = [];
      $('ol > li').each(function(i, el) {
        stories[i] = {
          id: i,
          title: $(this).children('.slide').children('.content').children('.title').text(),
          url: 'https://time.com' + $(this).children('.slide').children('.content').children('.title').children('a').attr('href'),
        };
      });
      fs.writeFile('app/server/data/latest-stories.json', JSON.stringify(stories, null, 2), (err) =>
        console.log('File successfully written! Errors: ', err)
      );
    }
  } catch (err) {
    console.log(err.message);
  }
};

goForTheStories(url);

const axios = require('axios');
const cheerio = require('cheerio');

async function parsePreviews(URL) {
  const results = [];
  const data = await axios.get(URL);
  const $ = cheerio.load(data.data);
  const allSpans = $('.udlite-block-list-item-content, span');
  
  //ищем среди всех span'ов Preview/Предпросмотр
  allSpans.each(function () {
    if ($(this).text() === 'Preview' || $(this).text() === 'Предпросмотр') {
      const text = $(this).parent('span').text();
      // время в секундах для  дальнейшних сортировок
      let [minutes, seconds] = text.slice(-5).split(':');
      results.push({
        videoName: text.slice(0, -5),
        duration: text.slice(-5),
        durationInSeconds: +minutes * 60 + +seconds,
      });
    }
  });
  return results.sort((a, b) => a.durationInSeconds - b.durationInSeconds);
}

module.exports = parsePreviews;

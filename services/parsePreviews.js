const axios = require('axios');
const cheerio = require('cheerio');

async function parsePreviews(URL) {
  const results = [];
  const data = await axios.get(URL);
  const $ = cheerio.load(data.data);
  const allSpans = $('.udlite-block-list-item-content, span');
  const courseName = $('h1').text();
  //ищем среди всех span'ов Preview/Предпросмотр
  allSpans.each(function () {

    if ($(this).text() === 'Preview' || $(this).text() === 'Предпросмотр') {
      const text = $(this).parent().closest('div').first('span').text()
      // время в секундах для  дальнейшних сортировок
      let [minutes, seconds] = text.slice(-5).split(':');
      results.push({
        videoName: text.slice(0, -5).replace('Preview',' (Preview)')
        .replace('Предпросмотр', ' (Предпросмотр)'),
        duration: text.slice(-5),
        durationInSeconds: +minutes * 60 + +seconds,
      });
    }
  });
   results.sort((a, b) => a.durationInSeconds - b.durationInSeconds);
   return {
     url: URL,
     courseName,
     results
   }
}

module.exports = parsePreviews;

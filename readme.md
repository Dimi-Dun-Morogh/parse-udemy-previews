
##### test parser with front-end app - https://dimi-dun-morogh.github.io/parse-udemy-previews/  <br>

**POST** https://parse-udemy-previews.herokuapp.com/previews
will accept request JSON  {"url":"http://udemycourse...."} and will return an object like:
```
{
    "url": "https://www.udemy.com/course/modern-javascript-from-beginning/",
    "courseName": "\nСовременный JavaScript + Vue с нуля на реальных проектах.\n",
    "results": [
        {
            "videoName": "Подключение скриптов (Предпросмотр)",
            "duration": "03:50",
            "durationInSeconds": 230
        },...]
```
there is also **GET** https://parse-udemy-previews.herokuapp.com/previews with predefined url for testing purpouses
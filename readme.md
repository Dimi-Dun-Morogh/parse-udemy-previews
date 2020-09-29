
POST https://parse-udemy-previews.herokuapp.com/previews
will accept request JSON  {"url":"http://udemycourse...."} and will return an array like
[
    {
        "videoName": "Подключение скриптовПредпросмотр",
        "duration": "03:50",
        "durationInSeconds": 230
    },
    {
        "videoName": "Коммуникация. Обновление домашних заданий.Предпросмотр",
        "duration": "06:17",
        "durationInSeconds": 377
    },
   ...]
there is also GET https://parse-udemy-previews.herokuapp.com/previews with predefined url for testing purpouses
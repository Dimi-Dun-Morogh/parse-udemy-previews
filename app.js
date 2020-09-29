const express = require('express');
const cors = require ('cors');
const previewRoutes = require('./routes/previews');


const app = express();

const PORT =  process.env.PORT || 3000;
const ROUTES = {
  previews: '/previews',
};

app.use(express.json()); //activate middleware to parse JSON
app.use(cors());

//routes
app.use(ROUTES.previews,previewRoutes)


app.listen(PORT, () => {
  console.log(`Server up and running, PORT: ${PORT}`);
});
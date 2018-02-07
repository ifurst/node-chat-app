const path = require('path');
const express = require('express');

const publicPath = path.join(__dirname, '../public');
console.log(publicPath);

const app = express();

var port = process.env.PORT || 3000;

//Middle ware
app.use(express.static(publicPath));

//Public get/post request
app.get('/', (q, r) => {
    r.render('index.html');
});


//listen
app.listen(port, () => {
    console.log(`App up and running at ${port}`);
})
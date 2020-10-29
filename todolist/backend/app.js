const express = require('express');
const bodyParser = require('body-parser');
const placesRoutes = require('./routes/places-routes');

const app = express();

app.use(bodyParser.urlencoded({
    extended: true
}));

app.use(placesRoutes);

app.listen(3000, (err) => {
    if (err) {
        console.log(err);
    } else {
        console.log('Server started on port 3000...');
    }
});
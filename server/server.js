var express = require('express');
var app = express();

app.use(express.static('../public'));

app.listen(3000);

app.get('/test', function(req, res) {
    console.log("redirecting to public");
    res.redirect('/');
});

var express = require('express');
var jwt    = require('jsonwebtoken');
var bodyParser = require('body-parser')
var app = express();

var user = {
    id: 1,
    login: "user",
    password: "user123"
};

app.use(express.static('../build'));



/*app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());*/

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , x-access-token, dupa");
    next();
});

app.use(function(req, res, next) {
    var token = req.headers['x-access-token'];
    next();
});


app.get('/authorization', function(req, res) {
    if(req.param('login') === "user" && req.param('password') === "user123") {
        var token = jwt.sign({id: user.id, type: 'user'}, "kauczukowiec", {expiresIn: 3600});
        res.json({
            success: true,
            token: token
        });
    } else {
        res.json({
            success: false
        });
    }
});

app.get('/authorizedUser', function(req, res) {
    var token = req.param('token');
    console.log(token);
    if(token) {
        jwt.verify(token, 'kauczukowiec', function(err, decoded) {
            if (err) {
                return res.json({ success: false, message: 'Failed to authenticate token.' });
            } else {
                res.json({type: decoded.type})
            }
        });
    } else {
        res.json({type: 'guest'});
    }
});



app.listen(3000);
console.log("Server is running at port 3000");
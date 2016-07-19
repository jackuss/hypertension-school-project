var express = require('express');
var jwt    = require('jsonwebtoken');
var bodyParser = require('body-parser');
var mysql = require('mysql');

var app = express();
var connection = mysql.createConnection({
    host: '52.28.46.91',
    user: 'user_lkfs',
    password: 'lkfs123',
    database: 'lkfs'
});

connection.connect(function(err) {
    if(err) {
        console.log('error connecting ' + err.stack);
        return;
    }

    console.log('connected as id' + connection.threadId);
});



var members = [
    {
        "name": "Jan Kowalski",
        "birthDate": "1990-03-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    },
    {
        "name": "Marcin Zieliński",
        "birthDate": "1985-10-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    },
    {
        "name": "Pan Boczek",
        "birthDate": "1985-10-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    },
    {
        "name": "Korwin Mikke Janusz",
        "birthDate": "1985-10-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    },
    {
        "name": "Piotruś Pan",
        "birthDate": "1985-10-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    },
    {
        "name": "Bonifacy Marian",
        "birthDate": "1985-10-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    },
    {
        "name": "Tak",
        "birthDate": "1985-10-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    },
    {
        "name": "Adam Mochnik",
        "birthDate": "1985-10-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    },
    {
        "name": "Święty Mikołaj",
        "birthDate": "1985-10-29",
        "successes": [
            "I miejsce w lidze w Toruniu",
            "II miejsce w lidze w Warszawie"
        ]
    }
];

var schedule = [
    {
        date: new Date(),
        timeStart: new Date(),
        name: "Liga mistrzów"
    },
    {
        date: new Date(),
        timeStart: new Date(),
        name: "Liga mamatorów"
    },
    {
        date: new Date(),
        timeStart: new Date(),
        name: "Liga majowa"
    },
    {
        date: new Date(),
        timeStart: new Date(),
        name: "Dyp - 2 koszyki"
    }
];

var modalSchedule1 = {
    freeEntry: false,
    name: "Liga majowa",
    date: new Date(),
    description: "Lorem ipsum",
    competitions: [
        {
            competitionName: "OD",
            startTime: new Date(),
            ranksFee: [
                {
                    rank: "novice",
                    fee: 5
                },
                {
                    rank: "amator",
                    fee: 10
                },
                {
                    rank: "semi-pro",
                    fee: 20
                },
                {
                    rank: "pro",
                    fee: 30
                },
                {
                    rank: "pro",
                    fee: 40
                }
            ]
        },
        {
            competitionName: "OS",
            startTime: new Date(),
            ranksFee: [
                {
                    rank: "novice",
                    fee: 5
                },
                {
                    rank: "amator",
                    fee: 10
                },
                {
                    rank: "semi-pro",
                    fee: 20
                },
                {
                    rank: "pro",
                    fee: 30
                },
                {
                    rank: "pro",
                    fee: 40
                }
            ]
        },
        {
            competitionName: "DYP",
            startTime: new Date(),
            ranksFee: [
                {
                    rank: "-",
                    fee: 10
                }
            ]
        },
        {
            competitionName: "AMA OD",
            startTime: new Date(),
            ranksFee: [
                {
                    rank: "novice",
                    fee: 5
                },
                {
                    rank: "amator",
                    fee: 10
                }
            ]
        },{
            competitionName: "AMA OS",
            startTime: new Date(),
            ranksFee: [
                {
                    rank: "novice",
                    fee: 5
                },
                {
                    rank: "amator",
                    fee: 10
                }
            ]
        }
    ]
};

var modalSchedule2 = {
    freeEntry: true,
    name: "DYP 2 koszyki",
    date: new Date(),
    competitions: [
        {
            competitionName: "DYP 2 koszyki"
        }
    ]
};

var results = [
    {name: "Dyp", date: new Date()},
    {name: "Liga letnia", date: new Date()},
    {name: "Liga majowa", date: new Date()},
    {name: "Liga jesienna", date: new Date()},
    {name: "Liga zimowa", date: new Date()},
    {name: "Gramy żeby grać", date: new Date()},
    {name: "Gramy żeby wygrać", date: new Date()},
    {name: "Gramy żeby przegrać", date: new Date()},
];

var resultsDetials = [
    {
        type: "OS",
        results: [
            {place: "1", player: "Jan Kowalski"},
            {place: "2", player: "Jan Nowak"},
            {place: "3", player: "Wacław Kowalski"},
            {place: "4-6", player: "Pan Tadeusz"},
            {place: "4-6", player: "Rychu Peja"}
        ]
    },
    {
        type: "OD",
        results: [
            {place: "1", player: "Jan Kowalski, Jan Kowalski"},
            {place: "2", player: "Jan Nowak, Jan Kowalski"},
            {place: "3", player: "Wacław Kowalski, Jan Kowalski"},
            {place: "4-6", player: "Pan Tadeusz"},
            {place: "4-6", player: "Rychu Peja"}
        ]
    }
];

app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*");
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept , x-access-token, dupa");
    next();
});

app.use('/public', express.static('public'));

app.get('/members', function(req, res) {
    var test
    setTimeout(function() {
        connection.query({
            sql: "SELECT * FROM lkfs_members"
        }, function(error, results, fields) {
            res.json(results);
        });
    }, 2000);
});

app.get('/schedule/', function(req, res) {
    res.json(schedule)
});

app.get('/scheduleDetails/:id', function(req, res) {
    var id = req.params.id;
    console.log(id);
    if(id === "1") {
        res.json(modalSchedule1);
    } else {
        res.json(modalSchedule2);
    }

});

app.get('/results', function(req, res) {
    res.json(results);
});

app.get('/resultsDetails', function(req, res) {
    res.json(resultsDetials);
});


app.listen(3000);
console.log("Server is running at port 3000");
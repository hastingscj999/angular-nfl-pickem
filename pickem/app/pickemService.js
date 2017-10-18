angular.module('pickemApp')
    .service('PickemService', function() {
        var games = [
            {
                matchup: "Oakland Raiders vs Kansas City Chiefs",
                time: "Thu 10/19 07:25 PM",
                confidence: 0
            },
            {
                matchup: "Buffalo Bills vs Tampa Bay Buccaneers",
                time: "Sun 10/22 12:00 PM",
                confidence: 0
            },
            {
                matchup: "Chicago Bears vs Carolina Panthers",
                time: "Sun 10/22 12:00 PM",
                confidence: 0
            },
            {
                matchup: "Cleveland Browns vs Tennessee Titans",
                time: "Sun 10/22 12:00 PM",
                confidence: 0
            },
            {
                matchup: "Green Bay Packers vs New Orleans Saints",
                time: "Sun 10/22 12:00 PM",
                confidence: 0
            },
            {
                matchup: "Indianapolis Colts vs Jacksonville Jaguars",
                time: "Sun 10/22 12:00 PM",
                confidence: 0
            },
            {
                matchup: "Los Angeles Rams vs Arizona Cardinals",
                time: "Sun 10/22 12:00 PM",
                confidence: 0
            },
            {
                matchup: "Miami Dolphins vs New York Jets",
                time: "Sun 10/22 12:00 PM",
                confidence: 0
            },
            {
                matchup: "Minnesota Vikings vs Baltimore Ravens",
                time: "Sun 10/22 12:00 PM",
                confidence: 0
            },
            {
                matchup: "San Francisco Forty-Niners vs Dallas Cowboys",
                time: "Sun 10/22 03:05 PM",
                confidence: 0
            },
            {
                matchup: "New York Giants vs Seattle Seahawks",
                time: "Sun 10/22 03:25 PM",
                confidence: 0
            },
            {
                matchup: "Pittsburgh Steelers vs Cincinnati Bengals",
                time: "Sun 10/22 03:25 PM",
                confidence: 0
            },
            {
                matchup: "Los Angeles Chargers vs Denver Broncos",
                time: "Sun 10/22 07:30 PM",
                confidence: 0
            },
            {
                matchup: "Philadelphia Eagles vs Washington Redskins",
                time: "Mon 10/23 07:30 PM",
                confidence: 0
            }
        ];

        var teams = [
            "Arizona Cardinals",
            "Atlanta Falcons",
            "Baltimore Ravens",
            "Buffalo Bills",
            "Carolina Panthers",
            "Chicago Bears",
            "Cincinnati Bengals",
            "Cleveland Browns",
            "Dallas Cowboys",
            "Detroit Lions",
            "Denver Broncos",
            "Green Bay Packers",
            "Houston Texans",
            "Indianapolis Colts",
            "Jacksonville Jaquars",
            "Kansas City Chiefs",
            "Los Angeles Chargers",
            "Los Angeles Rams",
            "Miami Dolphins",
            "Minnesota Vikings",
            "New England Patriots",
            "New Orleans Saints",
            "New York Giants",
            "New York Jets",
            "Oakland Raiders",
            "Philadelphia Eagles",
            "Pittsburgh Steelers",
            "San Francisco Forty-Niners",
            "Seattle Seahawks",
            "Tampa Bay Buccaneers",
            "Tennessee Titans",
            "Washington Redskins"
        ]

        this.getGames = function() {
            return games;
        }

        this.getTeams = function(){
            return teams;
        }
    });
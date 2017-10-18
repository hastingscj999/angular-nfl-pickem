function PickemService() {
    "ngInject";

    // private variable to store our goats entries
    const teams = [
        {
            name: "Arizona Cardinals",
            confidence: 1
        },
        {
            name: "Atlanta Falcons",
            confidence: 2
        },
        {
            name: "Baltimore Ravens",
            confidence: 3
        },
        {
            name: "Buffalo Bills",
            confidence: 4
        },
        {
            name: "Carolina Panthers",
            confidence: 5
        },
        {
            name: "Chicago Bears",
            confidence: 6
        },
        {
            name: "Cincinnati Bengals",
            confidence: 7
        },
        {
            name: "Cleveland Browns",
            confidence: 8
        },
        {
            name: "Dallas Cowboys",
            confidence: 9
        },
        {
            name: "Denver Broncos",
            confidence: 10
        },
        {
            name: "Detroit Lions",
            confidence: 11
        },
        {
            name: "Green Bay Packers",
            confidence: 12
        },
        {
            name: "Houston Texans",
            confidence: 13
        },
        {
            name: "Indianapolis Colts",
            confidence: 14
        },
        {
            name: "Jacksonville Jaguars",
            confidence: 15
        },
        {
            name: "Kansas City Chiefs",
            confidence: 16
        },
        {
            name: "Los Angeles Chargers",
            confidence: 17
        },
        {
            name: "Los Angeles Rams",
            confidence: 18
        },
        {
            name: "Miami Dolphins",
            confidence: 19
        },
        {
            name: "Minnesota Vikings",
            confidence: 20
        },
        {
            name: "New England Patriots",
            confidence: 21
        },
        {
            name: "New Orleans Saints",
            confidence: 22
        },
        {
            name: "New York Giants",
            confidence: 23
        },
        {
            name: "New York Jets",
            confidence: 24
        },
        {
            name: "Oakland Raiders",
            confidence: 25
        },
        {
            name: "Philadelphia Eagles",
            confidence: 26
        },
        {
            name: "Pittsburgh Steelers",
            confidence: 27
        },
        {
            name: "San Francisco Forty-Niners",
            confidence: 28
        },
        {
            name: "Seattle Seahawks",
            confidence: 29
        },
        {
            name: "Tampa Bay Buccaneers",
            confidence: 30
        },
        {
            name: "Tennessee Titans",
            confidence: 31
        },
        {
            name: "Washington Redskins",
            confidence: 32
        },
    ];

    return {

        // Will retrieve our goats list for displaying
        geTeams() {
            return teams;
        },

    }
}

export default PickemService;
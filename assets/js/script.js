window.alert("Let's play rock paper scissors!");

var choices = ["Rock", "Paper", "Scissors"];

var stats = {
    timesplayed: 0,
    wins: 0,
    ties: 0,
    losses: 0,
};

function computerChoice() {
    return choices[Math.floor(Math.random() * 3)].toLowerCase();
}

function rps() {
    let userInput = window.prompt("Pick Rock, Paper, or Scissors!").toLowerCase();
    let computerInput = computerChoice();
    if(userInput === computerInput) {
        window.alert("You tied with the computer!");
        stats.timesplayed++;
        stats.ties++;
        window.alert("Times played: " + stats.timesplayed + "\nWins: " + stats.wins + "\nTies: " + stats.ties + "\nLosses: " + stats.losses);
    } else if ((userInput === "rock" && computerInput === "scissors") || (userInput === "scissors" && computerInput === "paper") || (userInput === "paper" && computerInput === "rock")) {
        window.alert("You beat the computer!");
        stats.timesplayed++;
        stats.wins++;
        window.alert("Times played: " + stats.timesplayed + "\nWins: " + stats.wins + "\nTies: " + stats.ties + "\nLosses: " + stats.losses);
    } else {
        window.alert("You lost to the computer!");
        stats.timesplayed++;
        stats.losses++;
        window.alert("Times played: " + stats.timesplayed + "\nWins: " + stats.wins + "\nTies: " + stats.ties + "\nLosses: " + stats.losses);
    };
    if (window.confirm("Play again?")) {
        rps();
    }
};

rps();
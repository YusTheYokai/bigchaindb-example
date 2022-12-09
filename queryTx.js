const connection = require("./overhead").connection

// Query assets containing "Hello"
connection.searchAssets("/.*Hello.*/").then(console.log)

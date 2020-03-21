const queryville = require('./query_ville');

fetch("http://localhost:5000/api/Lyon")
.then(response => response.json())
.then(response => console.log(JSON.stringify(response)))
.catch(error => console.log("Erreur : " + error));
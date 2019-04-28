const firebase = require("firebase")
var config = {/*sua configuração firbase*/};
firebase.initializeApp(config);
const database = firebase.database();

module.exports = { database }
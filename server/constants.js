const TOMCAT_PORT = '8181';
const PORT = '5000';
const DB_NAME = 'fuseki/bike';
const DB_URL = `http://localhost:${TOMCAT_PORT}/${DB_NAME}/sparql`;

module.exports = {
  TOMCAT_PORT,
  DB_URL,
  PORT
};

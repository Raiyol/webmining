const axios = require('axios');
const {DB_URL} = require('./constants');
const querystring = require('querystring');

module.exports.get = async q => {
    try {
        const response = await axios.post(DB_URL, querystring.stringify({
            query : q
        }));
        const {data, status} = response;
        if (status >= 200 && status < 300) {
            return data;
        }
        console.error(status);
        return null;
    } catch (error) {
        return null;
    }
};

/*

querying('SELECT ?subject ?predicate ?object WHERE { ?subject ?predicate ?object } LIMIT 50')
.then(function(result){
    console.log(result.results.bindings);
});

*/
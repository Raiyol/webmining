const sparql = require('./query_db');

module.exports = async ville => {
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+
                "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>"+
                "PREFIX owl: <http://www.w3.org/2002/07/owl#>"+
                "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>"+
                "PREFIX ns: <http://www.owl-ontologies.com/unnamed.owl#>"+
                
                "SELECT ?x ?name ?addresse ?lat ?lng ?available_bikes ?available_bike_stands ?status "+
                "WHERE {"+
                "?x rdf:type ns:Station."+
                `?x ns:ville "${ville}".`+
                "?x ns:name ?name."+
                "?x ns:addresse ?addresse."+
                "?x ns:lat ?lat."+
                "?x ns:lng ?lng."+
                "?x ns:available_bikes ?available_bikes."+
                "?x ns:available_bike_stands ?available_bike_stands."+
                "?x ns:status ?status."+
                "}";
    try {
        const resp = await sparql.get(query);
        const stations = [];

        resp.results.bindings.forEach(elem => {
            let temp = {
                name : elem.name.value,
                addresse : elem.addresse.value,
                lat : elem.lat.value,
                lng : elem.lng.value,
                available_bikes : elem.available_bikes.value,
                available_bike_stands : elem.available_bike_stands.value,
                status : elem.status.value
            }
            stations.push(temp);
        });
        return stations;
    } catch (error) {
        return null;
    }
};
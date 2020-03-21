const sparql = require('./query_db');

module.exports = async ville => {
    let query = "PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>"+
                "PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>"+
                "PREFIX owl: <http://www.w3.org/2002/07/owl#>"+
                "PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>"+
                "PREFIX ns: <http://www.owl-ontologies.com/unnamed.owl#>"+
                
                "SELECT ?x ?name ?addresse ?lat ?lng ?available_bikes ?available_bike_stands ?status "+
                "WHERE {"+
                "?x rdf:type ns:Station. "+
                `?x ns:ville "${ville}". `+
                "OPTIONAL { ?x ns:name ?name. }. "+
                "OPTIONAL { ?x ns:addresse ?addresse. }. "+
                "OPTIONAL { ?x ns:lat ?lat. }. "+
                "OPTIONAL { ?x ns:lng ?lng. }. "+
                "OPTIONAL { ?x ns:available_bikes ?available_bikes. }. "+
                "OPTIONAL { ?x ns:available_bike_stands ?available_bike_stands. }. "+
                "OPTIONAL { ?x ns:status ?status. }"+
                "}";
    try {
        const resp = await sparql.get(query);
        const stations = [];
        resp.results.bindings.forEach(elem => {
            let temp = {
                x : elem.x.value,
                name : (elem.name == undefined ? '' : elem.name.value),
                addresse : (elem.addresse == undefined ? '' : elem.addresse.value ),
                lat : (elem.lat == undefined ? '' : elem.lat.value),
                lng : (elem.lng == undefined ? '' : elem.lng.value),
                available_bikes : (elem.available_bikes == undefined ? '' :  elem.available_bikes.value),
                available_bike_stands : (elem.available_bike_stands == undefined ? '' : elem.available_bike_stands.value),
                status : (elem.status == undefined ? '' : elem.status.value)
            }
            stations.push(temp);
        });
        return stations;
    } catch (error) {
        console.log(error);
        return null;
    }
};
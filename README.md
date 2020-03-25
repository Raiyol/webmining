# Webmining and Semantic

This is a school project with the intent to use a triple store and query it.
What we had to do is said here : [Project](http://www-inf.it-sudparis.eu/~gaaloulw/KM/Labs/project1.html)

This readme will be quite exhaustive, so [here](#Launch) the step to launch and run our project.

## The process

We started by producing our data model in Protege.
Our only class is "Station" who got the following properties:

- addresse: (string) station adress
- available_bike_stands: (int)
- available_bikes: (int)
- bike_stands: (int)
- lat: (float) latitude coordinate
- lng: (float) longitude coordinate
- name: (string) station name
- number: (int) station id
- status: (string) stations status, ex: "open"
- ville : (string) city name

## <a name="Launch"></a> Launch

To use our app, we need a running Sparql database, to do this we used Apache Jena Fuseki with Tomcat as a web application for our triple store and create a database + add our data.

### Database

You do no need to install Tomcat if you know how to launch Jena fuseki directy from command Line : Here [link](https://jena.apache.org/download/index.cgi) and [instruction](https://jena.apache.org/documentation/fuseki2/fuseki-run.html#fuseki-standalone-server).

Here we will use [Tomcat 9](https://tomcat.apache.org/download-90.cgi), and the war file in [Jena Fuseki](https://jena.apache.org/download/index.cgi).

If you use dafault install location for tomcat, put the WAR file in "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps"

Go to your web browser and enter the URL : <http://localhost:8181/fuseki/> with 8181 being my Tomcat port, change it to your Tomcat port, also change the variable TOMCAT_PORT in server/constants.js.

Create a database named bike and upload webdatamin.owl file to it.
Our database is created, we now need to insert all of our data.

To insert data, go to query section and change SPARQL ENDPOINT to /fuseki/bike/update, then copy paste all the content in querylyon.txt in the query textbox. You need to add "<" after all "PREFIX rdf/rdfs/owl...:" and ">" at the end of the line (for some reasons you cannot copy < or >).Run it with the ">" arrow. Repeat for queryrennestxt. The data is now inserted we don't need to manage our database anymore.

To update data, go to https://download.data.grandlyon.com/wfs/rdata?SERVICE=WFS&VERSION=1.1.0&outputformat=GEOJSON&request=GetFeature&typename=jcd_jcdecaux.jcdvelov&SRSNAME=urn:ogc:def:crs:EPSG::4171, copy paste the page in the dataLyonjsonld.json, run the lyontotriple.py. You have now an updated querylyon.txt ready to insert like above!
Same for Rennes with https://data.rennesmetropole.fr/api/records/1.0/search/?dataset=etat-des-stations-le-velo-star-en-temps-reel,
copy paste in datarennes.json, run the renne.py.

### Web app

To run the web app, you'll need [NodeJS](https://nodejs.org/en/) installed.

First clone this git repo on your computer, enter the repo folder path on a shell and type :

```sh
npm install
# After dependencies has been installed, run :
node .
```

Now you can go check the front view on <http://localhost:5000/>

### Bonus : Query database via our web application

After running our web application, go to <http://localhost:5000/sparql> and you can query the database same as you would with Jena Fuseki GUI on localhost.
Try the exemple below :

```sh
PREFIX rdf: <http://www.w3.org/1999/02/22-rdf-syntax-ns#>
PREFIX rdfs: <http://www.w3.org/2000/01/rdf-schema#>
PREFIX owl: <http://www.w3.org/2002/07/owl#>
PREFIX xsd: <http://www.w3.org/2001/XMLSchema#>
PREFIX ns: <http://www.owl-ontologies.com/unnamed.owl#>

SELECT ?subject ?predicate ?object
WHERE {
  ?subject ?predicate ?object
}
LIMIT 50
```

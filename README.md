# Webmining and Semantic

This is a school project with the intent to use a triple store and query it.
What we had to do is said here : [Project](http://www-inf.it-sudparis.eu/~gaaloulw/KM/Labs/project1.html)

This readme will be quite exhaustive, so [here](#Launch) the step to launch and run our project.

## The process

Nous avons commencé par la production d'un modèle de données par Protégé.
Notre class unique est "Station" qui porte les propriétés suivantes:

- addresse: (string) station adress
- available_bike_stands: (int)
- available_bikes: (int)
- bike_stands: (int)
- commune: (string) town name
- lat: (float) latitude coordinate
- lng: (float) longitude coordinate
- name: (string) station name
- number: (int) station id
- status: (string) stations status, ex: "open"

## <a name="Launch"></a> Launch
To use our app, we need a running Sparql database, to do this we used Apache Jena Fuseki with Tomcat as a web application for our triple store and create a database + add our data.
### Database
You do no need to install Tomcat if you know how to launch Jena fuseki directy from command Line : Here [link](https://jena.apache.org/download/index.cgi) and [instruction](https://jena.apache.org/documentation/fuseki2/fuseki-run.html#fuseki-standalone-server).

Here we will use [Tomcat 9](https://tomcat.apache.org/download-90.cgi), and the war file in [Jena Fuseki](https://jena.apache.org/download/index.cgi).

If you use dafault install location for tomcat, put the WAR file in "C:\Program Files\Apache Software Foundation\Tomcat 9.0\webapps"

Go to your web browser and enter the URL : http://localhost:8181/fuseki/ with 8181 being my Tomcat port, change it to your Tomcat port, also change the variable TOMCAT_PORT in server/constants.js.

Create a database named bike and upload webdatamin.owl file to it.
Our database is created, we now need to insert all of our data.

To insert data, go to query section and change SPARQL ENDPOINT to /fuseki/bike/update, then copy paste all the content in insert.txt in the query textbox and run it with the ">" arrow. The data is now inserted we don't need to manage our database anymore.
### Execute with Nodejs

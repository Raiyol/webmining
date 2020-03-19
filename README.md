# Webmining and Semantic

This is a school project with the intent to use a triple store and query it.
What we had to do is said here : [Project](http://www-inf.it-sudparis.eu/~gaaloulw/KM/Labs/project1.html)

This readme will be quite exhaustive, so [here](#Launch) the step to launch and run our project.

## The process

Nous avons commencé par la production d'un modèle de données par Protégé.
Notre class unique est "Station" qui porte les propriétés suivantes:

- addresse: (string) addresse de la station
- available_bike_stands: (int)
- available_bikes: (int)
- bike_stands: (int)
- commune: (string) nom de la commune
- lat: (float) latitude coordinate
- lng: (float) longitude coordinate
- name: (string) nom de la station
- number: (int) numèro identifiant la station
- status: (string) status des stations ex: "open"

## <a name="Launch"></a> Launch
To use our app, we will need Tomcat as a web application for our triple store and create a database + add our data.
### Tomcat

### Execute with Nodejs

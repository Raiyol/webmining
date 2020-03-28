import json

#just to have readable data 
with open('datarenne.json') as json_data:
    data = json.load(json_data)


with open('datarenne.json', 'w') as outfile:
    json.dump(data, outfile,indent=2)

with open('datarenne.json') as json_data:
    data = json.load(json_data)

print(data["records"][2]["fields"]["coordonnees"][0])




#erase file
open('queryrennes.txt', 'w').close()

string_start="PREFIX rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#"+"\n"+"PREFIX rdfs: http://www.w3.org/2000/01/rdf-schema#"+"\n"+"PREFIX owl: http://www.w3.org/2002/07/owl#"+"\n"+"PREFIX xsd: http://www.w3.org/2001/XMLSchema#"+"\n"+"PREFIX ns: http://www.owl-ontologies.com/unnamed.owl#"+"\n"+"INSERT DATA"+"\n"+"{"+"\n"
with open('queryrennes.txt', 'a') as outfile:
        outfile.write(string_start)



for i in range (len(data["records"])):
    #we add 10000 to change the id btw cities
    k=i+10000
    station_nameid="ns:st"+str(k)+" rdf:type ns:Station."
    station_ville="ns:st"+str(k)+" ns:ville 'Rennes'."
    station_name="ns:st"+str(k)+" ns:numero '"+data["records"][i]["fields"]["nom"]+"'."

    #station_addresse="ns:st"+str(i)+" ns:addresse '"+data["records"]["properties"]["address"]+"'."    
    #no adress here

    station_lat="ns:st"+str(k)+" ns:lat '"+str(data["records"][i]["fields"]["coordonnees"][0])+"'."
    station_lng="ns:st"+str(k)+" ns:lng '"+str(data["records"][i]["fields"]["coordonnees"][1])+"'."
    station_available_bikes="ns:st"+str(k)+" ns:available_bikes '"+str(data["records"][i]["fields"]["nombrevelosdisponibles"])+"'."
    station_available_bike_stands="ns:st"+str(k)+" ns:available_bike_stands '"+str(data["records"][i]["fields"]["nombreemplacementsdisponibles"])+"'."
    station_status="ns:st"+str(k)+" ns:status '"+data["records"][i]["fields"]["etat"]+"'."


    string_i=station_nameid+'\n'+station_ville+'\n'+station_name+'\n'+station_lat+'\n'+station_lng+'\n'+station_available_bikes+'\n'+station_available_bike_stands+'\n'+station_status+'\n'
    with open('queryrennes.txt', 'a') as outfile:
        outfile.write(string_i)


string_end="}"
with open('queryrennes.txt', 'a') as outfile:
        outfile.write(string_end)

import json


with open('dataLyonjsonld.json') as json_data:
    data = json.load(json_data)


#erase file
open('querylyon.txt', 'w').close()

string_start="PREFIX rdf: http://www.w3.org/1999/02/22-rdf-syntax-ns#"+"\n"+"PREFIX rdfs: http://www.w3.org/2000/01/rdf-schema#"+"\n"+"PREFIX owl: http://www.w3.org/2002/07/owl#"+"\n"+"PREFIX xsd: http://www.w3.org/2001/XMLSchema#"+"\n"+"PREFIX ns: http://www.owl-ontologies.com/unnamed.owl#"+"\n"+"INSERT DATA"+"\n"+"{"+"\n"
with open('querylyon.txt', 'a') as outfile:
        outfile.write(string_start)


#put data to querylyon.txt
for i in range (len(data["features"])):
    
    station_nameid="ns:st"+str(i)+" rdf:type ns:Station."
    station_ville="ns:st"+str(i)+" ns:ville 'Lyon'."
    #remove "'" in the data, like in the case of "d'" or "l'"
    g=data["features"][i]["properties"]["name"]
    g=g.replace("'", "")
    station_name="ns:st"+str(i)+" ns:name '"+g+"'."
    s=data["features"][i]["properties"]["address"]
    s=s.replace("'", "")
    station_addresse="ns:st"+str(i)+" ns:addresse '"+s+"'."
    station_lat="ns:st"+str(i)+" ns:lat '"+data["features"][i]["properties"]["lat"]+"'."
    station_lng="ns:st"+str(i)+" ns:lng '"+data["features"][i]["properties"]["lng"]+"'."
    station_available_bikes="ns:st"+str(i)+" ns:available_bikes '"+data["features"][i]["properties"]["available_bikes"]+"'."
    station_available_bike_stands="ns:st"+str(i)+" ns:available_bike_stands '"+data["features"][i]["properties"]["available_bike_stands"]+"'."
    station_status="ns:st"+str(i)+" ns:status '"+data["features"][i]["properties"]["status"]+"'."


    string_i=station_nameid+'\n'+station_ville+'\n'+station_name+'\n'+station_addresse+'\n'+station_lat+'\n'+station_lng+'\n'+station_available_bikes+'\n'+station_available_bike_stands+'\n'+station_status+'\n'
    with open('querylyon.txt', 'a') as outfile:
        outfile.write(string_i)

string_end="}"
with open('querylyon.txt', 'a') as outfile:
        outfile.write(string_end)










"""like:
ns:bike3 ns:adressse "testest".
ns:bike3 ns:lat "63.22"^^xsd:float.



"""
"""
gigatable= {"ns:bike3 ns:adressse 'testest'.","ns:bike3 ns:lat '63.22'^^xsd:float."}
print(gigatable)
print(len(data))
print(len(data[5]["properties"]))


#some tests
num=5
print("ns:station"+str(num)+" ns:numero '"+data[0]["properties"]["number"]+"'")
mystring="ns:station"+str(num)+" ns:numero '"+data[0]["properties"]["number"]+"'"
gigatable=[]
gigatable.append(mystring)
gigatable.append(mystring)
gigatable.append("a")
print(gigatable[1])
"""
"""
?x rdf:type ns:Station.
  ?x ns:ville "Lyon".
  ?x ns:name ?name.
  ?x ns:addresse ?adress.
  ?x ns:lat ?lat.
  ?x ns:lng ?long.
  ?x ns:available_bikes ?available_bikes.
  ?x ns:available_bike_stands ?available_bike_stands.
  ?x ns:status ?status.

  old code

  i=5
s=data[i]["properties"]["address"]
print(s)
s=s.replace("'", "")
print(s)
print("ns:st"+str(i)+" ns:addresse '"+s+"'.")
  
  gigatable=[]

  gigatable.append(station_nameid)
    gigatable.append(station_ville)
    gigatable.append(station_name)
    gigatable.append(station_addresse)
    gigatable.append(station_lat)
    gigatable.append(station_lng)
    gigatable.append(station_available_bikes)
    gigatable.append(station_available_bike_stands)
    gigatable.append(station_status)
  
  with open('querylyon.json', 'w') as outfile:
    json.dump(gigatable, outfile,indent=2)
  
  """






    
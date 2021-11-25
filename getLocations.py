import sys
from APIKeyHandler import get_key
import pprint
import pgeocode
import requests


# Convert zip code to latitude longitude
nomi = pgeocode.Nominatim('us')
query = nomi.query_postal_code(str(sys.argv[1]))
lat = str(query["latitude"])
long = str(query["longitude"])

llString = str(lat) + '%2C' + str(long)
radius = '10000'
category = str(sys.argv[2])

url = "https://api.foursquare.com/v3/places/search?query="+category+"&ll="+llString+"&radius="+radius

headers = {
    "Accept": "application/json",
    "Authorization": get_key()
}

response = requests.request("GET", url, headers=headers)
    
with open('static/hotSpots.json', 'w') as file: 
    file.truncate(0)        # Clears file before writing to it
    file.write(response.text)


    

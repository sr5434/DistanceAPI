import requests
import json

def send_req(lat1, long1, lat2, long2):
    url = "https://xskzkakoqrhpzxghcsnq.supabase.co/functions/v1/distance-calculator"
    data = {"lat1": lat1, "long1": long1, "lat2": lat2, "long2": long2}

    res = requests.post(url, json = data)
    return json.loads(res.text)["distance"]
dist = send_req(input("Latitude for the first point:"), input("Longitude for the first point:"), input("Latitude for the second point:"), input("Longitude for the second point:"))
print(dist, "kilometers")
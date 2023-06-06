# Distance API
This is a simple Supabase-powered API that calculates the distance(in kilometers) between two coordinates on earth.
## Get started with self hosting
Run `npx supabase deploy distance-calculator` to deploy. Then turn off JWT authentication and add the link to the main.py file in the client folder.
## How the algorithm works
The algorithm uses the Haversine formula to calculate the distances between the coordinates.
## Ideas
 - Write bindings for your favorite language
 - Add support for miles
## API Spec
The endpoint for the API is hosted at https://xskzkakoqrhpzxghcsnq.supabase.co/functions/v1/distance-calculator. To use it, send a POST request to that endpoint, with the data in the format of {"lat1": latitude1, "long1": longitude1, "latitude2": latitude2, "long2": longitude2}. For an example of how to call the API, check the main.py file in the client.
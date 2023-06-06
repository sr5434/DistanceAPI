import { serve } from "https://deno.land/std@0.168.0/http/server.ts"

function calc_dist(lat1: number, lat2: number, lon1: number, lon2: number){
  // The math module contains a function
  // named toRadians which converts from
  // degrees to radians.
  lon1 =  lon1 * Math.PI / 180;
  lon2 = lon2 * Math.PI / 180;
  lat1 = lat1 * Math.PI / 180;
  lat2 = lat2 * Math.PI / 180;

  // Haversine formula
  const dlon = lon2 - lon1;
  const dlat = lat2 - lat1;
  const a = Math.pow(Math.sin(dlat / 2), 2) + Math.cos(lat1) * Math.cos(lat2) * Math.pow(Math.sin(dlon / 2),2);
  const c = 2 * Math.asin(Math.sqrt(a));

  // Radius of earth in kilometers. Use 3956
  // for miles
  const r = 6371;

  // calculate the result
  return(c * r);
}

serve(async (req) => {
  const { lat1, long1, lat2, long2 } = await req.json()
  const data = {
    distance: calc_dist(lat1, lat2, long1, long2),
    units: "km"
  }

  return new Response(
    JSON.stringify(data),
    { headers: { "Content-Type": "application/json" } },
  )
})
export {calc_dist};

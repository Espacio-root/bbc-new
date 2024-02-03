import requests
import geocoder
from math import radians, sin, cos, sqrt, atan2

# Function to calculate the distance between two geographical coordinates using Haversine formula
def distance(coord1, coord2):
    # Radius of the Earth in kilometers
    R = 6371.0

    # Convert latitude and longitude from degrees to radians
    lat1, lon1 = radians(coord1[0]), radians(coord1[1])
    lat2, lon2 = radians(coord2[0]), radians(coord2[1])

    # Differences in coordinates
    dlat = lat2 - lat1
    dlon = lon2 - lon1

    # Haversine formula
    a = sin(dlat / 2)**2 + cos(lat1) * cos(lat2) * sin(dlon / 2)**2
    c = 2 * atan2(sqrt(a), sqrt(1 - a))

    # Distance in kilometers
    distance = R * c

    return distance

# Function to get the current location based on the IP address
def get_location():
    location = geocoder.ip('me')
    latitude, longitude = location.latlng
    return latitude, longitude

# Function to find the nearest hospitals using OpenStreetMap Nominatim API
def find_nearest_hospitals_osm(latitude, longitude, num_results=10):
    endpoint = 'https://nominatim.osm.org/search'
    params = {
        'format': 'json',
        'addressdetails': 1,
        'limit': num_results,
        'q': 'hospital',
        'viewbox': f'{longitude - 0.1},{latitude - 0.1},{longitude + 0.1},{latitude + 0.1}',
        'bounded': 1,
    }

    try:
        # Make a GET request to the Nominatim API
        response = requests.get(endpoint, params=params)
        
        # Raise an HTTPError for bad responses
        response.raise_for_status()

        # Parse the JSON response
        results = response.json()

        return results
    except requests.exceptions.RequestException as e:
        # Print an error message if an exception occurs during the request
        print(f"Error: {e}")
        return None

# latitude, longitude = get_location()
# nearest_hospitals = find_nearest_hospitals_osm(latitude, longitude)

# if nearest_hospitals is not None:
#     # Sort hospitals by distance
#     nearest_hospitals_sorted = sorted(nearest_hospitals, key=lambda hospital: distance((latitude, longitude), (float(hospital['lat']), float(hospital['lon']))))

#     x = 1
#     for hospital in nearest_hospitals_sorted:
#         name = hospital.get('name', 'N/A')
#         print(f"{x}:\nCoordinates: {hospital['lat']}, {hospital['lon']}\nDistance: {'{:.2f}'.format(distance((latitude, longitude), (float(hospital['lat']), float(hospital['lon']))))} km\nName: {name}\nFull Add: {hospital['display_name']}\n\n")
#         x += 1
# else:
#     print("No results or an error occurred.")

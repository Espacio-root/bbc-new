import requests
from pprint import pprint

def find_nearest_hospitals(latitude, longitude, radius=5000, num_results=5):
    api_key = 'AIzaSyArXm9v_1MRJQfx_537GmJzIMg86XrJqso'
    endpoint = 'https://maps.googleapis.com/maps/api/place/nearbysearch/json'

    params = {
        'location': f'{latitude},{longitude}',
        'radius': radius,
        'type': 'hospital',
        'key': api_key
    }

    try:
        response = requests.get(endpoint, params=params)
        response.raise_for_status()  # Raise an HTTPError for bad responses.
        results = response.json().get('results', [])

        pprint(response.json())
        # Limit to the desired number of results
        nearest_hospitals = results[:num_results]

        return nearest_hospitals
    
    except requests.exceptions.RequestException as e:
        print(f"Error: {e}")
        return None

# Example usage
latitude = 28.5751593  # Replace with your actual latitude
longitude = 77.2483072  # Replace with your actual longitude

print("1")
nearest_hospitals = find_nearest_hospitals(latitude, longitude)
print("2")
for hospital in nearest_hospitals:
    print(f"{hospital['name']} - {hospital['vicinity']}")

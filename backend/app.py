from flask import Flask, jsonify
from flask_cors import CORS
from main import *

app = Flask(__name__)
CORS(app)
PORT = 8080

# API route to get nearest hospitals
@app.route('/nearest_hospitals', methods=['GET'])
def get_nearest_hospitals():
    # Get the current location coordinates using the get_location() function
    latitude, longitude = get_location()

    # Find the nearest hospitals using the find_nearest_hospitals_osm() function
    nearest_hospitals = find_nearest_hospitals_osm(latitude, longitude)

    if nearest_hospitals is not None:
        # Sort the hospitals by distance using the distance() function
        nearest_hospitals_sorted = sorted(nearest_hospitals, key=lambda hospital: distance((latitude, longitude), (float(hospital['lat']), float(hospital['lon']))))

        # Create a list of dictionaries containing information about each hospital
        result = [
            {
                'name': hospital.get('name', 'N/A'),
                'distance': '{:.2f}'.format(distance((latitude, longitude), (float(hospital['lat']), float(hospital['lon'])))),
                'coordinates': {'lat': hospital['lat'], 'lon': hospital['lon']},
                'full_address': hospital['display_name']
            }
            for hospital in nearest_hospitals_sorted
        ]

        # Return the result as JSON
        return jsonify(result)
    else:
        # Return an error message if no results or an error occurred during the request
        return jsonify({'error': 'No results or an error occurred'})

if __name__ == '__main__':
    # Run the Flask app in debug mode
    app.run(debug=True, port=PORT)

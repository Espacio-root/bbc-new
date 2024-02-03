# Hospital Locator and Chatbot Web App

This project is a web application that combines a hospital locator and a chatbot powered by OpenAI's GPT API. The backend is implemented in Python using Flask, and the frontend is built using ReactJS with Tailwind CSS, Next.js, and TypeScript.

## Technologies Used

- **Backend:**
  - Flask (Python web framework)
  - Geocoder library
  - Requests library
  - Nominatim API (OpenStreetMap)

- **Frontend:**
  - ReactJS
  - Tailwind CSS
  - Next.js
  - TypeScript
  - HTML5
  - CSS3
  - JavaScript

- **Chatbot:**
  - OpenAI GPT API

## How to Run the Program

### Frontend (React App)
1. Navigate to the frontend directory:

  ```bash
  Copy code
  cd frontend
```

2. Install dependencies:

  ```bash
  Copy code
  npm install
  ```

3. Run the React app:

  ```bash
  Copy code
  npm start
  ```

The React app will start, and you can access it at http://localhost:3000/.

### Backend (Flask App)

1. Ensure you have Python installed on your system. If not, download and install it from [python.org](https://www.python.org/).

2. Set up a virtual environment (optional but recommended):

   ```bash
   python -m venv venv
   # On Windows: venv\Scripts\activate
   # On macOS/Linux: source venv/bin/activate
   ```

3. Install the required packages:

  ```bash
  pip install -r requirements.txt
```

4. Run the Flask app:

  ```bash
  python app.py
```

The Flask app will start, and you can access it at http://127.0.0.1:5000/nearest_hospitals.


# Hospital Locator
- The web app includes a hospital locator feature.
- Users can find the 10 nearest hospitals based on their current location.
- The list includes distances, and clicking on a hospital shows it on an embedded map with directions.


# Code Files

### Backend (Flask App)

- app.py: Main Flask application file.
- main.py: Contains functions for distance calculation, location retrieval, and hospital search.

### Frontend (React App)
- frontend/src/App.tsx: Main React component.
- frontend/src/pages/api/hospitals.ts: API endpoint for hospital data.
- frontend/src/pages/index.tsx: Homepage component.
- frontend/public/index.html: HTML template for the React app.


## Additional Notes

- Make sure the backend Flask app is running before accessing the frontend.
- Modify API endpoints in the React app if Flask app runs on a different port.

'use client';
import React, { useState, useEffect } from 'react';

const page = ({}) => {
    const [apiData, setApiData] = useState(null);
    const [active, setActive] = useState(null);
    useEffect(() => {
        fetch('http://localhost:8080/nearest_hospitals')
            .then((res) => {
                // Check if response is successful
                if (!res.ok) {
                    throw new Error('Network response was not ok');
                }
                // Parse response body as JSON
                return res.json();
            })
            .then((data) => {
                // Now you can work with the JSON data
                setApiData(data)
            })
            .catch((error) => {
                console.error('Error fetching data:', error);
            });
    }, []); 
    return (
        <div>
        {apiData ?
        <div>
          <table className="table-auto">
            <thead>
              <tr>
                <th className="px-4 py-2">No.</th>
                <th className="px-4 py-2">Name</th>
                <th className="px-4 py-2">Address</th>
                <th className="px-4 py-2">Distance</th>
              </tr>
            </thead>
            <tbody>
              {apiData.map((hospital, index) => (
                <tr key={index} onClick={() => setActive(apiData[index-1])}>
                  <td className="border px-4 py-2">{index + 1}</td>
                  <td className="border px-4 py-2">{hospital.name}</td>
                  <td className="border px-4 py-2">{hospital.full_address}</td>
                  <td className="border px-4 py-2">{hospital.distance}</td>
                </tr>
              ))}
            </tbody>
          </table>
          {active &&
            <div>
            <iframe src={`https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d112085.36993720224!2d${active.coordinates.lon}!3d${active.coordinates.lat}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1706964848906!5m2!1sen!2sin`} width="600" height="450" style="border:0;" allowfullscreen="" loading="lazy" referrerpolicy="no-referrer-when-downgrade"></iframe>
          </div>
        }
        </div>
        : <p className='text-4xl mt-8'>Loading data...</p>}
        </div>

      );
}

export default page
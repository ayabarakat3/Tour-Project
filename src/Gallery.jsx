import React, { useState, useEffect } from 'react';

function Gallery() {
  const [tours, setTours] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
// Code meant to create a gallery function to display app information.

  useEffect(() => {
    fetch('https://api.allorigins.win/get?url=https://course-api.com/react-tours-project')
      .then(response => response.json())
      .then(data => {
        setTours(JSON.parse(data.contents));
        setLoading(false);
      })
      .catch(err => {
        setError(`Tours failed to fetch: ${err.message}`);
        setLoading(false);
      });
  }, []);
// Code meant to fetch the API.

  if (loading) return <div>Loading...</div>;
  if (error) return <div>{error}</div>;
  
  return (
    <div className="gallery">
      {tours.map(tour => (
        <div key={tour.id} className="tour-card">
          <img src={tour.image} alt={tour.name} />
          <h3>{tour.name}</h3>
          <p>${tour.price}</p>
          <p>
            {tour.info.length > 100 ? `${tour.info.substring(0, 100)}...` : tour.info}
            {tour.info.length > 100 && (
              <button onClick={() => alert(tour.info)}>
                Click here read more
              </button>
            )}
          </p>
          <button onClick={() => setTours(tours.filter(t => t.id !== tour.id))}>
            I'm not interested
          </button>
        </div>
      ))}
    </div>
  );
}
// Code created to display buttons to either allow users to either read more or choose not interested.
export default Gallery;
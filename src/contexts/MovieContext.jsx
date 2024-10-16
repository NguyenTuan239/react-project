// MovieContext.js
import React, { createContext, useState, useEffect } from 'react';

export const MovieContext = createContext();

export const MovieProvider = ({ children }) => {
  const [movies, setMovies] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    // Call the API through a proxy
    fetch('/api/movies')
      .then((response) => {
        if (!response.ok) {
          throw new Error('Lỗi khi lấy dữ liệu từ API');
        }
        return response.json();
      })
      .then((data) => {
        setMovies(data.movies); 
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi:', error);
        setError(error.message); 
        setLoading(false); 
      });
  }, []);

  return (
    <MovieContext.Provider value={{ movies, loading, error }}>
      {children}
    </MovieContext.Provider>
  );
};

// DataContext.js
import React, { createContext, useState, useEffect } from 'react';

// Tạo context
export const DataContext = createContext();

// Provider component
export const DataProvider = ({ children }) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch dữ liệu từ API khi component mount
  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/posts')
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        console.error('Lỗi khi fetch dữ liệu:', error);
        setLoading(false);
      });
  }, []);

  return (
    <DataContext.Provider value={{ data, loading }}>
      {children}
    </DataContext.Provider>
  );
};

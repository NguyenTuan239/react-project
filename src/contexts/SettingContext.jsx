
import { createContext, useContext, useState, useEffect } from 'react';

// Create Context with default value
const SettingContext = createContext({
  direction: 'ltr',
  textColor: '#ca0606',
  BGColor: '#ff00002a',
  LogoColor: '/image/logo.webp',
  toggleDirection: () => {},
  toggletextColor: () => {},
  toggleBGColor: () => {},
});

// Hook to use SettingContext
export const useSetting = () => useContext(SettingContext);

// Provider cho SettingContext
export const SettingProvider = ({ children }) => {
  const [direction, setDirection] = useState('ltr');
  const [textColor, settextColor] = useState('#ca0606');
  const [BGColor, setBGColor] = useState('#ff00002a');
  const [LogoColor, setLogoColor] = useState('/image/logo.webp');

  // Initialize value from localStorage
  useEffect(() => {
    const savedDirection = localStorage.getItem('direction') || 'ltr';
    const savedtextColor = localStorage.getItem('textColor') || '#ca0606';
    const savedBGColor = localStorage.getItem('BGColor') || '#ca0606';
    const savedLogoColor = localStorage.getItem('LogoColor') || '/image/logo.webp';
    setDirection(savedDirection);
    settextColor(savedtextColor);
    setBGColor(savedBGColor);
    setLogoColor(savedLogoColor);
    // document.documentElement.dir = savedDirection;
    document.documentElement.style.setProperty('--main-color', savedtextColor);
    document.documentElement.style.setProperty('--hover-backgournd-color', savedBGColor);
    document.querySelectorAll('.logo').forEach(logo => {
      logo.src = savedLogoColor;
  })
  }, []);

  const toggleDirection = (newDirection) => {
    setDirection(newDirection);
    // document.documentElement.dir = newDirection;
    localStorage.setItem('direction', newDirection);
  };

  const toggletextColor = (newtextColor) => {
    settextColor(newtextColor);
    localStorage.setItem('textColor', newtextColor);
    document.documentElement.style.setProperty('--main-color', newtextColor);
  };
  
  const toggleBGColor = (newBGColor) => {
    setBGColor(newBGColor);
    localStorage.setItem('BGColor', newBGColor);
    document.documentElement.style.setProperty('--hover-backgournd-color', newBGColor);
  };

  const toggleLogoColor = (newLogoColor) => {
    setLogoColor(newLogoColor);
    localStorage.setItem('LogoColor', newLogoColor);
    document.querySelectorAll('.logo').forEach(logo => {
      logo.src = newLogoColor;
    });
  };

  return (
    <SettingContext.Provider value={{ direction, textColor, BGColor, LogoColor, toggleDirection, toggletextColor, toggleBGColor, toggleLogoColor }}>
      {children}
    </SettingContext.Provider>
  );
};

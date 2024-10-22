import { useEffect, useState } from 'react';

function Loader() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const handleLoad = () => {
      setTimeout(() => {
        setLoading(false);
      }, 1000); 
    };

    if (document.readyState === 'complete') {
      handleLoad();
    } else {
      window.addEventListener('load', handleLoad);
    }

    return () => window.removeEventListener('load', handleLoad); 
  }, []);

  if (!loading) return null;

  return (
    <div className="z-50 fixed w-full h-full bg-zinc-950 flex justify-center items-center">
      <img
        src="/react-project/image/loader.gif"
        alt="Loading"
        className="h-60 w-auto"
      />
    </div>
  );
}

export default Loader;

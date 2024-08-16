import React, { useEffect, useState } from 'react';
import Snowflake from '../css/Bubbles';

const Snowfall = () => {
  const [snowflakes, setSnowflakes] = useState([]);

  useEffect(() => {
    const interval = setInterval(() => {
      setSnowflakes((prev) => [...prev, <Snowflake key={prev.length} />]);
    }, 50);

    setTimeout(() => {
      clearInterval(interval);
    }, 2000);

    return () => clearInterval(interval);
  }, []);

  return <div className="fixed inset-0 overflow-hidden">{snowflakes}</div>;
};

export default Snowfall;

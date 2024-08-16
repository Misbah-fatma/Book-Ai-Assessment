import React, { useEffect, useRef } from 'react';

const Snowflake = () => {
  const snowflakeRef = useRef();

  useEffect(() => {
    const snowflake = snowflakeRef.current;

    // Each snowflake looks and behaves a little differently
    snowflake.style.left = `${Math.random() * 100}vw`;
    snowflake.style.animationDuration = `${Math.random() * 5 + 3}s`;
    snowflake.style.opacity = Math.random();
  }, []);

  return (
    <div
      ref={snowflakeRef}
      className="absolute text-white text-3xl animate-falling"
      style={{ top: '-20vh', padding: '1rem' }}
    >
      *
    </div>
  );
};

export default Snowflake;

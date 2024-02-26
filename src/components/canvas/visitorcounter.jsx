import React, { useState, useEffect } from 'react';

function VisitorCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    const storedCount = localStorage.getItem("pageVisits");
    const initialCount = storedCount ? parseFloat(storedCount) : 0;
    setCount(initialCount );
    localStorage.setItem("pageVisits", initialCount + 0.5);
  }, []);

  return (
    <div> 
      <span style={{ fontWeight: 'bold' }} className="text-secondary">
        Number of Visitors: {count} 
      </span>
    </div>
  );
};

export default VisitorCounter;

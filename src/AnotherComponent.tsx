import React, { useEffect } from 'react';
import Logger from './Logger';

const AnotherComponent: React.FC = () => {
  useEffect(() => {
    const logger = Logger.getInstance();
    logger.log("This is another component!");
  }, []);

  return (
    <div>
      <h2>Another Component</h2>
    </div>
  );
}

export default AnotherComponent;

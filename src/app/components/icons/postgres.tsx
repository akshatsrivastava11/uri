import React from 'react';
import { SvgProps } from 'react-native-svg';

const PostgreSQL: React.FC<SvgProps> = (props) => {
return (
  <svg width="24" height="24" viewBox="0 0 24 24"  xmlns="http://www.w3.org/2000/svg" >
    <path d="M12 2L2 22h20L12 2z" fill="currentColor" />
    <path d="M12 10L18 16H6L12 10z" fill="white" />
  </svg>
);
};

export default PostgreSQL;

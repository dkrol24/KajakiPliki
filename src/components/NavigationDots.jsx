import React from 'react';

const NavigationDots = ({ active }) => (
  <div className="app__navigation">
    {['start', 'oferta','galeria','poradnik','kontakt'].map((item, index) => (
      <a
        href={`#${item}`}
        key={item + index}
        className="app__navigation-dot"
        style={active === item ? { backgroundColor: '#4bc57c' } : {}}
      />
    ))}
  </div>
);

export default NavigationDots;
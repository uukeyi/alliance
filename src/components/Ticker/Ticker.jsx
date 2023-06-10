import React from 'react';
import styles from './Ticker.module.css';
const Ticker = () => {
  const words = [
    'СЕДАНЫ',
    'ХЭТЧБЕКИ',
    'КРОССОВЕРЫ',
    'ЛДИПЫ',
    'МИНИВЭНЫ',
    'ГРУЗОВИКИ',
    'ЭЛЕКТРОКАРЫ',
    'ГИБРИДЫ',
    'СЕДАНЫ',
    'ХЭТЧБЕКИ',
    'КРОССОВЕРЫ',
    'ЛДИПЫ',
    'МИНИВЭНЫ',
    'ГРУЗОВИКИ',
    'ЭЛЕКТРОКАРЫ',
    'ГИБРИДЫ',
  ];
  const { wrapper, itemsWrapper } = styles;
  return (
    <div className={wrapper}>
      <div className={itemsWrapper}>
        {words.map((item , index) => (
          <p key={index}>#{item}</p>
        ))}
      </div>
    </div>
  );
};

export default Ticker;

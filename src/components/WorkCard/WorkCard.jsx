import React from 'react';
import styles from './WorkCard.module.css';
const WorkCard = ({ image, title, text, customClass }) => {
  const { cardWrapper, cardTitle, cardText, cardImage, bottom } = styles;
  return (
    <div className={`${cardWrapper} ${customClass}`}>
      <img src={image} alt="icon" className={cardImage} />
      <div className={bottom}>
        <p className={cardTitle}>{title}</p>
        <p className={cardText}>{text}</p>
      </div>
    </div>
  );
};

export default WorkCard;

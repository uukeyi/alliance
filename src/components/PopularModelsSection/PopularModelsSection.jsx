import React from 'react';
import styles from './PopularModelsSection.module.css';
import carImg1 from '../../assets/imgs/popular-1.png';
import carImg2 from '../../assets/imgs/popular-2.png';
import carImg3 from '../../assets/imgs/popular-3.png';
import carImg4 from '../../assets/imgs/popular-4.png';
import { useModal } from '../../contexts/modalContext';
const PopularModelsSection = () => {
  const {
    popularModelsSection,
    wrapper,
    cardButton,
    cardWrapper,
    title,
    cardsContainer,
    cardDescription,
    cardInfo,
    cardInfoLeft,
    cardInfoRight,
    cardPrice,
    cardModel,
    cardLine,
  } = styles;
  const cardData = [
    {
      image: carImg1,
      model: 'GENESIS GV80',
      year: 2022,
      mileage: '23.100',
      engine: '3.0 diesel',
      equipment: 'Premium',
      price: '6 500 000',
    },
    {
      image: carImg2,
      model: 'KIA MOHAVE',
      year: 2023,
      mileage: '10.000',
      engine: '3.0 diesel',
      equipment: 'Luxe',
      price: '5 000 000',
    },
    {
      image: carImg3,
      model: 'MERCEDES GLS 400 D',
      year: 2022,
      mileage: '45.000',
      engine: 'Diesel',
      equipment: 'Premium',
      price: '15 000 000',
    },
    {
      image: carImg4,
      model: 'LEXUS 600',
      year: 2022,
      mileage: '52.000',
      engine: '3.500',
      equipment: 'Executive',
      price: '15 000 000',
    },
  ];
  const {setIsModelOpen} = useModal()
  return (
    <section id="popularModels" className={popularModelsSection}>
      <div className="container">
        <div className={wrapper}>
          <p className={title}>
            ПОПУЛЯРНЫЕ<span> МОДЕЛИ</span>
          </p>
          <div className={cardsContainer}>
            {cardData.map((item , index) => (
              <div className={cardWrapper} key={index}>
                <img src={item.image} alt="car-model" />
                <div className={cardDescription}>
                  <p className={cardModel}>{item.model}</p>
                  <div className={cardLine}></div>
                  <div className={cardInfo}>
                    <p className={cardInfoLeft}>Год</p>
                    <p className={cardInfoRight}>{item.year}</p>
                  </div>
                  <div className={cardInfo}>
                    <p className={cardInfoLeft}>Пробег</p>
                    <p className={cardInfoRight}>{item.mileage}</p>
                  </div>
                  <div className={cardInfo}>
                    <p className={cardInfoLeft}>Тип двигателя</p>
                    <p className={cardInfoRight}>{item.engine}</p>
                  </div>
                  <div className={cardInfo}>
                    <p className={cardInfoLeft}>Комплектация</p>
                    <p className={cardInfoRight}>{item.equipment}</p>
                  </div>
                </div>
                <p className={cardPrice}>{item.price} ₽</p>
                <a href="#" onClick={(e) => {
                  e.preventDefault()
                  setIsModelOpen(true)
                }} className={cardButton}>
                  Оставить заявку
                  {/* <img src={arrowIcon} alt="arrow" /> */}
                </a>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default PopularModelsSection;

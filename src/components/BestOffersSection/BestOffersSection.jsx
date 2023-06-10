import React from "react";
import styles from "./BestOffersSection.module.css";
import carImgLeft from "../../assets/imgs/offers-left.png";
import carImgRight2 from "../../assets/imgs/offers-right-2.png";
import carImgRight1 from "../../assets/imgs/offers-right-1.png";
import arrowIcon from "../../assets/icons/arrow-icon.svg";
import { useModal } from "../../contexts/modalContext";
const BestOffersSection = () => {
   const {
      wrapper,
      title,
      cardsContainer,
      right,
      left,
      cardButton,
      cardDescription,
      cardInfo,
      cardLine,
      cardModel,
      cardWrapper,
      cardInfoRight,
      cardDescRight,
      cardInfoLeft,
      cardPrice,
      bestOffersSection,
   } = styles;
   const cardData = [
      { image: carImgRight1, model: "CATERPILLAR 308E2 CR", price: "300 000" },
      { image: carImgRight2, model: "KOMATSUWA100-7", price: "1 670 000" },
   ];
   const { setIsModelOpen } = useModal();
   return (
      <section id="bestOffers" className={bestOffersSection}>
         <div className="container">
            <div className={wrapper}>
               <p className={title}>
                  ЛУЧШИЕ<span> ПРЕДЛОЖЕНИЯ СПЕЦТЕХНИКИ</span>
               </p>
               <div className={cardsContainer}>
                  <div className={left}>
                     <div className={cardWrapper}>
                        <img src={carImgLeft} alt="car-model" />
                        <div className={cardDescRight}>
                           <div className={cardDescription}>
                              <p className={cardModel}>
                                 Maker Hinocar name Dutro
                              </p>
                              <div className={cardLine}></div>
                              <div className={cardInfo}>
                                 <p className={cardInfoLeft}>Год</p>
                                 <p className={cardInfoRight}>
                                    2009 (Heisei 21)
                                 </p>
                              </div>

                              <div className={cardInfo}>
                                 <p className={cardInfoLeft}>Модель</p>
                                 <p className={cardInfoRight}> BDG-XZU334M</p>
                              </div>
                           </div>
                           <p className={cardPrice}>2 100 000 ₽</p>
                           <a
                              href="#"
                              onClick={(e) => {
                                 e.preventDefault();
                                 setIsModelOpen(true);
                              }}
                              className={cardButton}
                           >
                              Оставить заявку
                              <img src={arrowIcon} alt="arrow" />
                           </a>
                        </div>
                     </div>
                  </div>
                  <div className={right}>
                     {cardData.map((item, index) => (
                        <div className={cardWrapper} key={index}>
                           <img src={item.image} alt="car-model" />
                           <div className={cardDescRight}>
                              <div className={cardDescription}>
                                 <p className={cardModel}>{item.model}</p>
                                 <div className={cardLine}></div>
                                 <p className={cardPrice}>{item.price} ₽</p>
                              </div>
                              <a
                                 href="#"
                                 onClick={(e) => {
                                    e.preventDefault();
                                    setIsModelOpen(true);
                                 }}
                                 className={cardButton}
                              >
                                 Оставить заявку
                                 <img src={arrowIcon} alt="arrow" />
                              </a>
                           </div>
                        </div>
                     ))}
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default BestOffersSection;

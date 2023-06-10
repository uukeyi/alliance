import React from 'react';
import styles from './BuyBenefitsSection.module.css';
import img1 from '../../assets/imgs/buy-benefits-img1.png';
import img2 from '../../assets/imgs/buy-benefits-img2.png';
import img3 from '../../assets/imgs/buy-benefits-img3.png';
const BuyBenefitsSection = () => {
  const { buyBenefitsSection, title, wrapper, text, imageContainer, imgWrapper } = styles;
  return (
    <section id="buyBenefits" className={buyBenefitsSection}>
      <div className={wrapper}>
        <p className={title}>
          <span>ПРЕИМУЩЕСТВА ПОКУПКИ</span>
          <br /> НА АУКЦИОНЕ
        </p>
        <p className={text}>
          Покупка машины на аукционе — это шанс получить хорошую престижную машину, которая стоит
          своих денег. Это предприятие имеет много серьезных достоинств по сравнению с отечественным
          рынком автомобилей, бывших в употреблении.
          <br /> В отличие от отечественных рынков подержанных машин, аукционы полностью указывают
          все особенности состояния ТС в аукционном листе, потому что дорожат десятилетиями
          заработанной репутацией и не хотят иметь проблемы с покупателями. Купив машину с аукциона,
          вы будете уверены, что получили авто именно с теми характеристиками, что отражены в листе.
          Россияне покупают автомобили с аукционов Японии, Кореи, Китая, США уже много-много лет. За
          это время процесс стал настолько отработанным, что Вам не придется столкнуться с
          трудностями при покупке, доставке, таможенном оформлении Вашего автомобиля.
          <br /> Здесь нет сумасшедших наценок от перекупщиков и дополнительных комиссий от салонов
          — цены на услуги четко фиксируются. Даже с учетом таможенного оформления и расходов на
          доставку купить машину на аукционе выгоднее, чем приобрести такую машину в России.
        </p>
      </div>
      <div className={imgWrapper}>
        <img src={img1} alt="image" />
        <div className={imageContainer}>
          <img src={img2} alt="image" />
          <img src={img3} alt="image" />
        </div>
      </div>
    </section>
  );
};

export default BuyBenefitsSection;

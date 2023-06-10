import React from 'react';
import styles from './WorkBenefitsSection.module.css';
import carImg from '../../assets/imgs/benefits-car.png';

import rocketIcon from '../../assets/icons/benefits-rocket.svg';
const WorkBenefitsSection = () => {
  const {
    workBenefitsSection,
    wrapper,
    title,
    titleWrapper,
    left,
    right,
    leftText,
    cardsContainer,
    cardTop,
    cardLine,
    cardNumber,
    cardText,
    rightText,
    overlay,
    cardWrapper,
    carImage,
  } = styles;
  const cardData = [
    {
      number: '01.',
      desc: 'Все условия покупки авто и ответственность сторон фиксируются в договоре. Оплата производится за конкретный автомобиль, выбранный на автоаукционе в Японии.',
    },
    {
      number: '02.',
      desc: 'Гарантируем сохранность автомобиля с момента осмотра экспертом до передачи клиенту в конечном пункте доставки.',
    },
    {
      number: '03.',
      desc: 'Гарантируем 100% возврат денежных средств, если вы отказываетесь от покупки, до выкупа лота на аукционе.',
    },
  ];
  return (
    <section id="workBenefits" className={workBenefitsSection}>
      <div className={wrapper}>
        <div className={left}>
          <div className={overlay}>
            <div className={titleWrapper}>
              <p className={title}>
                ПРЕИМУЩЕСТВА
                <br />
                <span>
                  {' '}
                  РАБОТЫ С НАМИ <img src={rocketIcon} alt="rocket" />
                </span>
              </p>
              <img src={rocketIcon} alt="rocket" />
            </div>
            <p className={leftText}>Более 5 лет доверия от наших клиентов</p>
            <div className={cardsContainer}>
              {cardData.map((card , index) => (
                <div key={index} className={cardWrapper}>
                  <div className={cardTop}>
                    <p className={cardNumber}>{card.number}</p>
                    <div className={cardLine}></div>
                  </div>
                  <p className={cardText}>{card.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className={right}>
          <p className={rightText}>
            Более 4000 довольных клиентов за 5 лет работы на рынке поставки автомобилей с аукционов
            Японии
          </p>
          <img src={carImg} alt="car" className={carImage} />
        </div>
      </div>
    </section>
  );
};

export default WorkBenefitsSection;

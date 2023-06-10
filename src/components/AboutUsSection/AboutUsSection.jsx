import React from 'react';
import styles from './AboutUsSection.module.css';
import aboutIcon1 from '../../assets/icons/about-icon-1.svg';
import aboutIcon2 from '../../assets/icons/about-icon-2.svg';
import aboutIcon3 from '../../assets/icons/about-icon-3.svg';
import car from '../../assets/imgs/about-car.png';
import Ticker from '../Ticker/Ticker';
const AboutUsSection = () => {
  const {
    aboutUsSection,
    top,
    bottom,
    title,
    subtitle,
    desc,
    cardWrapper,
    cardRight,
    cardTitle,
    cardDesc,
    wrapper,
    imgWrapper,
    carImg,
  } = styles;
  const cardData = [
    {
      img: aboutIcon1,
      title: 'Простота процесса',
      description:
        'Вся процедура полностью безопасна. Вам не придется столкнуться с проблемами ни при выборе, ни при доставке, ни при растаможке.',
      id: 1,
    },
    {
      img: aboutIcon2,
      title: 'Высокое качество',
      description:
        'Авто, не имеющие пробега по российским дорогам и обслуженные в строгом соответствии с регламентами производителя',
      id: 2,
    },
    {
      img: aboutIcon3,
      title: 'Огромное количество предложений',
      description:
        'На аукционах представлены автомобили самых разных классов и в любом состоянии. Вы можете заказать как практически новую машину, так и авто после ДТП по очень низкой цене;',
      id: 3,
    },
  ];

  return (
    <section id="aboutUs" className={aboutUsSection}>
      <Ticker />
      <div className="container">
        <div className={wrapper}>
          <div className={top}>
            <img src={car} alt="car" className={carImg} />
            <p className={title}>
              О<span> КОМПАНИИ</span>
            </p>
            <p className={subtitle}>
              Мы те, кто поможет Вам в процессе выбора автомобиля с аукциона
            </p>
            <p className={desc}>
              Наша компания предоставляет возможность покупки автомобиля и спецтехники в рамках
              вашего бюджета без пробега по РФ, переплат, скрытых комиссий и дополнительных
              расходов. Так же организуем процесс доставки техники с аукционов Японии, Кореи, Китая,
              США, и Европы во все регионы России. Наличие партнеров за рубежом гарантирует высокое
              качество поставляемых автомобилей и спецтехники и сводит финансовые риски к минимуму!
            </p>
          </div>
          <div className={bottom}>
            {cardData.map((item ) => (
              <div className={cardWrapper} key={item.id}>
                <div className={imgWrapper}>
                  <img src={item.img} alt="img" />
                </div>

                <div className={cardRight}>
                  <p className={cardTitle}>{item.title}</p>
                  <p className={cardDesc}>{item.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUsSection;

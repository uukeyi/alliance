import React from 'react';
import styles from './HowWeWorkSection.module.css';
import WorkCard from '../WorkCard/WorkCard';
import phoneIcon from '../../assets/icons/work-phone.svg';
import documentIcon from '../../assets/icons/work-document.svg';
import carIcon from '../../assets/icons/work-car.svg';
import payIcon from '../../assets/icons/work-pay.svg';
const HowWeWorkSection = () => {
  const {
    howWeWorkSection,
    newItem,
    wrapper,
    title,
    cardsContainer,
    grayLine,
    cardsWrapper,
    lastItem2,
    newItem2,
    lastItem,
    containerNone,
    containerMobile,
    circle,
  } = styles;

  return (
    <section id="howWeWork" className={howWeWorkSection}>
      <div className="container">
        <div className={wrapper}>
          <div className={circle}></div>
          <p className={title}>
            КАК<span> МЫ РАБОТАЕМ</span>
          </p>
          <div className={`${cardsContainer} ${containerNone}`}>
            <div className={cardsWrapper}>
              <WorkCard
                image={phoneIcon}
                title="Заявка"
                text="Вы оставляете заявку на сайте либо связываетесь с нами удобным для вас способом."
              />
              <span className={grayLine}></span>
              <WorkCard
                image={documentIcon}
                title="Договор"
                text="Заключаем договор, в котором четко прописываем характеристики и конечную стоимость"
              />
              <span className={`${grayLine} ${lastItem2}`}></span>
              <WorkCard
                customClass={lastItem2}
                image={carIcon}
                title="Подбор авто"
                text="Подбираем варианты (с подробным описанием и фотографиями) на аукционах и согласовываем с Вами"
              />
              <span className={`${grayLine} ${lastItem}`}></span>
              <WorkCard
                customClass={lastItem}
                image={payIcon}
                title="Покупка авто"
                text="После того, когда нашли понравившийся вариант, делаем ставки в пределах Вашего бюджета"
              />
            </div>

            <div className={cardsWrapper}>
              <WorkCard
                customClass={newItem2}
                image={carIcon}
                title="Подбор авто"
                text="Подбираем варианты (с подробным описанием и фотографиями) на аукционах и согласовываем с Вами"
              />
              <span className={`${grayLine} ${newItem2}`}></span>
              <WorkCard
                customClass={newItem}
                image={payIcon}
                title="Покупка авто"
                text="После того, когда нашли понравившийся вариант, делаем ставки в пределах Вашего бюджета"
              />
              <span className={`${grayLine} ${newItem} ${lastItem2} `}></span>
              <WorkCard
                customClass={lastItem2}
                image={documentIcon}
                title="Оплата"
                text="Оплачиваете стоимость автомобиля и сопутствующих расходов (транспортировка, доставка) после покупки на аукционе"
              />
              <span className={`${grayLine} ${lastItem2}`}></span>
              <WorkCard
                customClass={lastItem2}
                image={carIcon}
                title="Оформление 
                документов"
                text="Мы берем на себя процедуру таможенного оформления"
              />
              <span className={`${grayLine} ${lastItem}`}></span>
              <WorkCard
                customClass={lastItem}
                image={carIcon}
                title="Выдача авто"
                text="Передаем авто Вам или отправляем его вам в любой регион России"
              />
            </div>
            <div className={`${cardsWrapper} ${newItem2}`}>
              <WorkCard
                customClass={newItem2}
                image={documentIcon}
                title="Оплата"
                text="Оплачиваете стоимость автомобиля и сопутствующих расходов (транспортировка, доставка) после покупки на аукционе"
              />
              <span className={`${grayLine} ${newItem2}`}></span>
              <WorkCard
                customClass={newItem2}
                image={carIcon}
                title="Оформление 
                документов"
                text="Мы берем на себя процедуру таможенного оформления"
              />
            </div>
            <div className={`${cardsWrapper} ${newItem}`}>
              <WorkCard
                image={carIcon}
                title="Выдача авто"
                text="Передаем авто Вам или отправляем его вам в любой регион России"
              />
            </div>
          </div>
          <div className={`${cardsContainer} ${containerMobile}`}>
            <div className={cardsWrapper}>
              <WorkCard
                image={phoneIcon}
                title="Заявка"
                text="Вы оставляете заявку на сайте либо связываетесь с нами удобным для вас способом."
              />
              <WorkCard
                image={documentIcon}
                title="Договор"
                text="Заключаем договор, в котором четко прописываем характеристики и конечную стоимость"
              />
              <WorkCard
                image={carIcon}
                title="Подбор авто"
                text="Подбираем варианты (с подробным описанием и фотографиями) на аукционах и согласовываем с Вами"
              />
              <WorkCard
                image={payIcon}
                title="Покупка авто"
                text="После того, когда нашли понравившийся вариант, делаем ставки в пределах Вашего бюджета"
              />

              <WorkCard
                image={documentIcon}
                title="Оплата"
                text="Оплачиваете стоимость автомобиля и сопутствующих расходов (транспортировка, доставка) после покупки на аукционе"
              />
              <WorkCard
                image={carIcon}
                title="Оформление 
                документов"
                text="Мы берем на себя процедуру таможенного оформления"
              />
              <WorkCard
                image={carIcon}
                title="Выдача авто"
                text="Передаем авто Вам или отправляем его вам в любой регион России"
              />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HowWeWorkSection;

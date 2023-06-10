import React from 'react';
import styles from './ClearanceSection.module.css';
import clearanceImg from '../../assets/imgs/clearance-img.png';
const ClearanceSection = () => {
  const { clearanceSection, wrapper, title, left, right } = styles;
  return (
    <section id="clearance" className={clearanceSection}>
      <div className="container">
        <p className={title}>
          ТАМОЖЕННОЕ <span>ОФОРМЛЕНИЕ</span>
        </p>
      </div>
      <div className={wrapper}>
        <img src={clearanceImg} alt="bridge" className={left} />
        <div className={right}>
          <p>
            Понятие растаможивание означает легализацию машины при провозе через государственную
            границу и подразумевает оформление, согласно действующему таможенному кодексу.
          </p>
          <p>
            1. ДВ Альянс сделает таможенное оформление за свой счет. Клиенту предоставляется
            фотография ПТС и платежная ведомость.{' '}
          </p>
          <p>
            2. Клиент совершает окончательный платёж. В него входит таможенная пошлина, услуги
            брокера, хранение на таможенном складе, услуги менеджера ДВ Альянс.{' '}
          </p>
          <p>
            3. Выдача автомобиля клиенту, проверка его на соответствие аукционному листу и
            фотографиям, подписание акта приёма-передачи, передача документов (ПТС и ТПО и
            декларация ГТД). ДВ Альянс несёт полную ответственность за соответствие состояния авто
            аукционному листу.{' '}
          </p>
          <p>
            4. Если вы осуществляете покупку автомобиля из других регионов, то отправка автомобиля
            из Владивостока будет в вагонах-сетках по железной дороге либо автовозом. Документы
            клиенту отправляются экспресс-почтой.{' '}
          </p>
          <p>
            {' '}
            5. Менеджер компании ДВ Альянс информирует вас о движении заказа, начиная с момента
            покупки автомобиля на аукционе и вплоть до его получения вами в вашем городе. При
            отправке в другой регион, клиенту сообщается дата отправки и прихода автомобиля.{' '}
          </p>
          <p>
            6. Вы получаете автомобиль во Владивостоке (на таможне) или в вашем городе на стоянке
            компании-перевозчика. К этому моменту все необходимые документы уже будут оформлены,
            клиенту остаётся только поставить машину на учёт.
          </p>
        </div>
      </div>
    </section>
  );
};

export default ClearanceSection;

import React from "react";
import styles from "./ReviewsSection.module.css";
import { Swiper, SwiperSlide } from "swiper/react";
import reviewSrc1 from "../../assets/imgs/reviewicon.png";
import reviewSrc2 from "../../assets/imgs/reviewicon2.png";
import starSrc from "../../assets/imgs/starReviews.png";
import { Navigation } from "swiper";

import "swiper/css";
const ReviewsSection = () => {
   const {
      reviewsSection,
      wrapper,
      title,
      reviewSlider,
      reviewSlide,
      slideCard,
      slideCardHeader,
      slideCardPersonInfo,
      slidePersonName,
      slidePersonDate,
      slideDescription,
      slideLine,
      paginationContainer,
      reviewHeader,
      headerline,
      headerStarContainer,
   } = styles;
   return (
      <section id="reviews" className={reviewsSection}>
         <div className="container">
            <div className={wrapper}>
               <div className={reviewHeader}>
                  <p className={title}>
                     <span>ОТЗЫВЫ</span> НАШИХ КЛИЕНТОВ
                  </p>
                  <div className={headerline}></div>
                  <div className={headerStarContainer}>
                     <img src={starSrc} alt="*" />
                     <img src={starSrc} alt="*" />
                     <img src={starSrc} alt="*" />
                     <img src={starSrc} alt="*" />
                     <img src={starSrc} alt="*" />
                  </div>
               </div>

               <Swiper
                  spaceBetween={0}
                  slidesPerView={1}
                  wrapperClass={reviewSlider}
                  navigation={{
                     nextEl: ".image-swiper-button-next-small",
                     prevEl: ".image-swiper-button-prev-small",
                  }}
                  modules={[Navigation]}
               >
                  <SwiperSlide className={reviewSlide}>
                     <div className={slideCard}>
                        <div className={slideCardHeader}>
                           <img
                              src={reviewSrc1}
                              alt="Не удалось отобразить картинку"
                           />
                           <div className={slideCardPersonInfo}>
                              <p className={slidePersonName}>Валентина И.</p>
                              <p className={slidePersonDate}>01.05.2023</p>
                           </div>
                        </div>
                        <p className={slideDescription}>
                           Неоценимая помощь была оказана при выборе машины и
                           дальнейшей ее судьбе пока машина не добралась до
                           наших берегов. Не было необходимости ходить по
                           таможенному складу, заниматься документами. Получил
                           авто у офиса компании.
                        </p>
                     </div>
                     <div className={slideLine}></div>
                     <div className={slideCard}>
                        <div className={slideCardHeader}>
                           <img
                              src={reviewSrc2}
                              alt="Не удалось отобразить картинку"
                           />
                           <div className={slideCardPersonInfo}>
                              <p className={slidePersonName}>Камилла Н.</p>
                              <p className={slidePersonDate}>28.04.2023</p>
                           </div>
                        </div>
                        <p className={slideDescription}>
                           От души хочу поблагодарить Артура и компанию ДВ
                           Альянс за мой космомобиль! Все время и нервное
                           ожидание Артур был на связи, подробно и доходчиво всё
                           объяснял. Спасибо огромное Вам ребята! Желаю Вам
                           спокойных адекватных клиентов, которые готовы ждать!
                           Машина превзошла все ожидания!
                        </p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className={reviewSlide}>
                     <div className={slideCard}>
                        <div className={slideCardHeader}>
                           <img
                              src={
                                 "https://zimamagazine.com/wp-content/uploads/2020/08/photo-1537314258490-7f581ad90fd4-600x397.jpeg"
                              }
                              alt="Не удалось отобразить картинку"
                           />
                           <div className={slideCardPersonInfo}>
                              <p className={slidePersonName}>Андрей С.</p>
                              <p className={slidePersonDate}>10.01.2022</p>
                           </div>
                        </div>
                        <p className={slideDescription}>
                           Я хочу выразить благодарность компании ДВ Альянс за
                           их профессионализм . Они взяли на себя всю сложность
                           логистики и бюрократии, что существенно упростило
                           процесс для меня. Мой автомобиль был доставлен точно
                           в срок, в отличном состоянии и полностью
                           соответствовал описанию.
                        </p>
                     </div>
                     <div className={slideLine}></div>
                     <div className={slideCard}>
                        <div className={slideCardHeader}>
                           <img
                              src={
                                 "https://avatars.dzeninfra.ru/get-zen_doc/1671806/pub_5e6ba578ce4a8916cd8eadde_5e6baaef6fa17f240b393b5f/scale_1200"
                              }
                              alt="Не удалось отобразить картинку"
                           />
                           <div className={slideCardPersonInfo}>
                              <p className={slidePersonName}>Павел П.</p>
                              <p className={slidePersonDate}>2.03.2023</p>
                           </div>
                        </div>
                        <p className={slideDescription}>
                           Мой опыт работы с ДВ Альянс был просто превосходным.
                           Они предоставили мне отличный выбор автомобилей, а их
                           команда экспертов помогла мне выбрать оптимальный
                           вариант, учитывая мои предпочтения и бюджет. Доставка
                           прошла гладко и без проблем, а мой автомобиль был в
                           идеальном состоянии.
                        </p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className={reviewSlide}>
                     <div className={slideCard}>
                        <div className={slideCardHeader}>
                           <img
                              src={
                                 "https://bipbap.ru/wp-content/uploads/2021/10/aleksej-razdumov-730x486.jpg"
                              }
                              alt="Не удалось отобразить картинку"
                           />
                           <div className={slideCardPersonInfo}>
                              <p className={slidePersonName}>Игорь Ф.</p>
                              <p className={slidePersonDate}>10.08.2022</p>
                           </div>
                        </div>
                        <p className={slideDescription}>
                           Сотрудники компании проявили глубокие знания в
                           области логистики и правил импорта-экспорта, что
                           позволило мне избежать головной боли, связанной с
                           этими процессами. Они устранили все возможные
                           трудности и обеспечили безопасную доставку моего
                           автомобиля прямо к моему дому.
                        </p>
                     </div>
                     <div className={slideLine}></div>
                     <div className={slideCard}>
                        <div className={slideCardHeader}>
                           <img
                              src={
                                 "https://img.freepik.com/free-photo/man-doing-the-lotus-position-while-reading-a-book_23-2148739315.jpg"
                              }
                              alt="Не удалось отобразить картинку"
                           />
                           <div className={slideCardPersonInfo}>
                              <p className={slidePersonName}>Григорий А.</p>
                              <p className={slidePersonDate}>24.07.2022</p>
                           </div>
                        </div>
                        <p className={slideDescription}>
                           Я очень рад, что обратился в ДВ Альянс для доставки
                           моего нового автомобиля из-за границы. Весь процесс
                           был очень гладким и без стрессов. Команда
                           профессионалов оперативно организовала все
                           необходимые формальности и помогла мне справиться с
                           логистикой. Они обеспечили безопасную и надежную
                           доставку автомобиля, и я получил его в отличном
                           состоянии.
                        </p>
                     </div>
                  </SwiperSlide>
                  <SwiperSlide className={reviewSlide}>
                     <div className={slideCard}>
                        <div className={slideCardHeader}>
                           <img
                              src={
                                 "https://avatars.dzeninfra.ru/get-zen_doc/1875669/pub_5e98b2638ca9fb1d3fd496b2_5e9c84142bf35767fbb1cac5/scale_1200"
                              }
                              alt="Не удалось отобразить картинку"
                           />
                           <div className={slideCardPersonInfo}>
                              <p className={slidePersonName}>Николай Н.</p>
                              <p className={slidePersonDate}>19.06.2023</p>
                           </div>
                        </div>
                        <p className={slideDescription}>
                           Я недавно приобрел автомобиль с помощью компании ДВ
                           Альянс.  Весь процесс
                           оформления и доставки был безупречным. Мой автомобиль
                           был доставлен в оговоренные сроки, а его состояние
                           полностью соответствовало описанию.
                        </p>
                     </div>
                     <div className={slideLine}></div>

                     <div className={slideCard}>
                        <div className={slideCardHeader}>
                           <img
                              src={'https://demotivation.ru/wp-content/uploads/2021/01/2790275752.jpg'}
                              alt="Не удалось отобразить картинку"
                           />
                           <div className={slideCardPersonInfo}>
                              <p className={slidePersonName}>Валентина И.</p>
                              <p className={slidePersonDate}>11.05.2022</p>
                           </div>
                        </div>
                        <p className={slideDescription}>
                           ДВ Альянс - это настоящие профессионалы в своей
                           области. Весь процесс был организован и прозрачен, а
                           команда ДВ Альянс всегда была на связи и готова
                           ответить на все мои вопросы. Я чувствовал себя в
                           безопасности, зная, что моя машина находится под их
                           надежной защитой.
                        </p>
                     </div>
                  </SwiperSlide>
               </Swiper>
               <div className={paginationContainer}>
                  <button class="image-swiper-button-prev-small">
                     <svg
                        width="25"
                        height="25"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M6.04961 10.3436C6.18604 10.2071 6.18604 9.98543 6.04961 9.849L1.69224 5.50016L6.04961 1.1428C6.18604 1.00636 6.18604 0.784658 6.04961 0.648224C5.91317 0.51179 5.69147 0.51179 5.55503 0.648224L0.958908 5.24435C0.890691 5.31256 0.856583 5.39784 0.856583 5.49163C0.856583 5.57691 0.890691 5.6707 0.958908 5.73892L5.55503 10.335C5.69147 10.48 5.91317 10.48 6.04961 10.3436Z"
                           fill="#C1C1C1"
                        />
                     </svg>
                  </button>

                  <button class="image-swiper-button-next-small">
                     <svg
                        width="25"
                        height="25"
                        viewBox="0 0 7 11"
                        fill="none"
                        xmlns="http://www.w3.org/2000/svg"
                     >
                        <path
                           d="M0.950394 0.656427C0.81396 0.792862 0.81396 1.01457 0.950394 1.151L5.30776 5.49984L0.950394 9.8572C0.81396 9.99364 0.81396 10.2153 0.950394 10.3518C1.08683 10.4882 1.30853 10.4882 1.44497 10.3518L6.04109 5.75565C6.10931 5.68744 6.14342 5.60216 6.14342 5.50837C6.14342 5.42309 6.10931 5.3293 6.04109 5.26108L1.44497 0.664955C1.30853 0.519994 1.08683 0.519994 0.950394 0.656427Z"
                           fill="#B11116"
                        />
                     </svg>
                  </button>
               </div>
            </div>
         </div>
      </section>
   );
};

export default ReviewsSection;

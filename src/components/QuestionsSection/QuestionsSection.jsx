import React, { useEffect, useState } from "react";
import styles from "./QuestionsSection.module.css";
import arrowIcon from "../../assets/icons/arrow-icon.svg";

import whatsappIcon from "../../assets/icons/whatsapp-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import whatsAppSrc from '../../assets/imgs/whatsapp.svg'

import emailjs from "@emailjs/browser";
import {
   handlePhoneInput,
   handlePhoneKeyDown,
   handlePhonePaste,
} from "../../utlis/validatePhone";
import { useRef } from "react";
const QuestionsSection = () => {
   const {
      wrapper,
      title,
      questionsSection,
      contactsWrapper,
      left,
      right,
      number,
      leftText,
      button,
      agreement,
      input,
      rightText,
      rightTitle,
      contactsIcons,
   } = styles;
   const [phone, setPhone] = useState("");

   const [success, setIsSucces] = useState(false);
   const [error, setIsError] = useState(false);
   const sendEmail = () => {
      try {
         emailjs.sendForm(
            "service_u8954xw",
            "template_o8k1pka",
            form.current,
            "pZrWRhdRZH4jTT15z"
         );
         setIsSucces(true);
      } catch (error) {
         setIsError(true);
      }
   };
   useEffect(() => {
      if (success) {
         alert("Спасибо за интерес! Скоро с вами свяжутся");
         setPhone("");
      }
   }, [success]);
   useEffect(() => {
      if (error) {
         alert("Возникла ошибка при отправлении");
      }
   }, [error]);
   const form = useRef();
   return (
      <section id="questions" className={questionsSection}>
         <div className="container">
            <div className={wrapper}>
               <p className={title}>
                  <span>ОСТАЛИСЬ</span> ВОПРОСЫ?
               </p>
               <div className={contactsWrapper}>
                  <form
                     ref={form}
                     onSubmit={(e) => {
                        e.preventDefault();
                        if (phone.trim() === "") {
                           alert("Заполните полe!");
                        } else {
                           sendEmail(form);
                        }
                     }}
                     className={left}
                  >
                     <p className={leftText}>
                        Наш менеджер поможет решить ваш вопрос! Оставьте ваши
                        контактные данные, мы свяжемся с вами в ближайшее время
                     </p>
                     <div>
                        <input
                           placeholder="Ваш телефон"
                           onChange={(e) => {
                              handlePhoneInput(e);
                              setPhone(e.target.value);
                           }}
                           name="phone"
                           onKeyDown={(e) => handlePhoneKeyDown(e)}
                           onPaste={(e) => handlePhonePaste(e)}
                           className={input}
                        />
                        <button type="submit" className={button}>
                           Оставить заявку
                        </button>
                        <p className={agreement}>
                           Оставляя заявку, я соглашаюсь с{" "}
                           <a href="https://severdv.pro/politika-konfidencialnosti">
                              политикой конфиденциальности и политикой обработки
                              данных
                           </a>
                        </p>
                     </div>
                  </form>
                  <div className={right}>
                     <p className={rightTitle}>Напишите нам</p>
                     <p className={rightText}>
                        Мы обязательно проконсультируем вас во вашему запросу.
                     </p>
                     <div className={contactsIcons}>
                        <a href="https://m.vk.com/id806266562">
                           <img src={whatsappIcon} alt="Vk" />
                        </a>
                        <a href="https://instagram.com/dv_alliance?igshid=MmJiY2I4NDBkZg==">
                           <img src={instagramIcon} alt="instagram" />
                        </a>
                        <a href="https://api.whatsapp.com/send?phone=89240055050">
                           <img alt="WhatsApp" src={whatsAppSrc} />
                        </a>
                     </div>
                     <a href="tel:89952810864" className={number}>
                     +7 (995) 281-08-64 <img src={arrowIcon} alt="arrow" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </section>
   );
};

export default QuestionsSection;

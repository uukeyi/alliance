import React, { useEffect, useState } from "react";
import styles from "./HeroSection.module.css";
import Header from "../Header/Header";
import arrowIcon from "../../assets/icons/arrow-icon.svg";
import lineImg from "../../assets/imgs/hero-line.png";
import emailjs from "@emailjs/browser";
import { useRef } from "react";

import {
   handlePhoneInput,
   handlePhoneKeyDown,
   handlePhonePaste,
} from "../../utlis/validatePhone";
const HeroSection = () => {
   const {
      heroSection,
      wrapper,
      title,
      priceContainer,
      left,
      right,
      top,
      heroLine,
      bottom,
      priceInputsTop,
      rightTitle,
      priceInput,
      rightText,
      topInput,
      bottomButton,
   } = styles;
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [comm, setComm] = useState("");
   const [success, setIsSucces] = useState(false);
   const [error, setIsError] = useState(false);
   const sendEmail = () => {
      try {
         emailjs.sendForm(
            "service_u8954xw",
            "template_61kk5vh",
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
         setName("");
         setPhone("");
         setComm("");
      }
   }, [success]);
   useEffect(() => {
      if (error) {
         alert("Возникла ошибка при отправлении");
      }
   }, [error]);
   const form = useRef();
   return (
      <section id={heroSection}>
         <img className={heroLine} src={lineImg} alt="line" />
         <Header />
         <div className="container">
            <div className={wrapper}>
               <h1 className={title}>
                  Автомобили и спецтехника с аукционов Японии, США, Кореи,Китая
                  и Европы
               </h1>
               <ul>
                  <li>За 5 лет работы привезено более 4 000 автомобилей.</li>
                  <li>
                     Нас выбирают клиенты со всех регионов, почти из каждого
                     города РФ
                  </li>
               </ul>
               <form
                  ref={form}
                  onSubmit={(e) => {
                     e.preventDefault();
                     if (
                        name.trim() === "" ||
                        phone.trim() === "" ||
                        comm.trim() === ""
                     ) {
                        alert("Заполните все поля!");
                     } else {
                        sendEmail(form);
                     }
                  }}
                  className={priceContainer}
               >
                  <div className={left}>
                     <div className={top}>
                        <div className={priceInputsTop}>
                           <input
                              placeholder="Имя"
                              name="name"
                              className={`${priceInput} ${topInput}`}
                              onChange={(e) => {
                                 setName(e.target.value);
                              }}
                           />
                           <input
                              placeholder="Телефон"
                              onChange={(e) => {
                                 handlePhoneInput(e);
                                 setPhone(e.target.value);
                              }}
                              name="phone"
                              onKeyDown={(e) => handlePhoneKeyDown(e)}
                              onPaste={(e) => handlePhonePaste(e)}
                              className={`${priceInput} ${topInput}`}
                           />
                        </div>
                        <input
                           placeholder="Укажите авто"
                           name="message"
                           onChange={(e) => {
                              setComm(e.target.value);
                           }}
                           className={priceInput}
                        />
                     </div>
                     <div className={bottom}>
                        <div className={bottomButton}>
                           <button type="submit">
                              Рассчитать стоимость{" "}
                              <img style={{marginLeft : '10px'}} src={arrowIcon} alt="arrow" />
                           </button>
                        </div>
                        <p>
                           Нажимая на кнопку, вы соглашаетесь с{" "}
                           <a href="#">
                              политикой обработки персональных данных
                           </a>{" "}
                        </p>
                     </div>
                  </div>
                  <div className={right}>
                     <p className={rightTitle}>Как узнать стоимость авто?</p>
                     <p className={rightText}>
                        Оставьте заявку, и мы перезвоним для расчёта стоимостии
                        обсуждения вариантов покупки авто
                     </p>
                  </div>
               </form>
            </div>
         </div>
      </section>
   );
};

export default HeroSection;

import React, { useEffect, useState } from "react";
import styles from "./ModalWindow.module.css";
import { useModal } from "../../contexts/modalContext";
import arrowIcon from "../../assets/icons/arrow-icon.svg";
import {
   handlePhoneInput,
   handlePhoneKeyDown,
   handlePhonePaste,
} from "../../utlis/validatePhone";
import emailjs from "@emailjs/browser";
import { useRef } from "react";
const ModalWindow = () => {
   const {
      modal,
      modalActive,
      modalWindow,
      modalWindowActive,
      modalTitle,
      priceContainer,
      left,
      top,
      bottom,
      priceInputsTop,
      priceInput,
      topInput,
      bottomButton,
      textAreaModal,
      privacyPolicy,
      popupCloseBtn,
   } = styles;
   const { modalIsOpen, setIsModelOpen } = useModal();
   const [name, setName] = useState("");
   const [phone, setPhone] = useState("");
   const [comm, setComm] = useState("");
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
         setName("");
         setPhone("");
         setComm("");
         setIsModelOpen(false);
      }
   }, [success]);
   useEffect(() => {
      if (error) {
         alert("Возникла ошибка при отправлении");
      }
   }, [error]);
   const form = useRef();
   return (
      <div
         onClick={(e) => {
            if (e.target.id == "modalCover" || e.target.id == "popupCloseBtn") {
               setIsModelOpen(false);
            } else {
               setIsModelOpen(true);
            }
         }}
         id="modalCover"
         className={modalIsOpen ? `${modalActive} ${modal}` : modal}
      >
         <div
            className={
               modalIsOpen ? `${modalWindowActive} ${modalWindow}` : modalWindow
            }
         >
            <svg
               width="16"
               height="16"
               viewBox="0 0 16 16"
               fill="none"
               xmlns="http://www.w3.org/2000/svg"
               className={popupCloseBtn}
               id="popupCloseBtn"
            >
               <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M9.90159 7.99982L15.6062 2.29523C16.1313 1.77011 16.1313 0.918737 15.6062 0.393698C15.0811 -0.131417 14.2298 -0.131417 13.7047 0.393698L7.99998 6.09837L2.29531 0.393622C1.7702 -0.131492 0.918895 -0.131492 0.39378 0.393622C-0.13126 0.918737 -0.13126 1.77011 0.39378 2.29515L6.09845 7.99975L0.39378 13.7044C-0.13126 14.2295 -0.13126 15.0809 0.39378 15.606C0.918895 16.1311 1.7702 16.1311 2.29531 15.606L7.99998 9.90128L13.7047 15.606C14.2297 16.1311 15.0811 16.1311 15.6062 15.606C16.1313 15.0808 16.1313 14.2295 15.6062 13.7044L9.90159 7.99982Z"
                  fill="white"
               />
            </svg>

            <p className={modalTitle}>Заполните свои данные</p>
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
                        type="text"
                        placeholder="Ваш комментарий"
                        className={textAreaModal}
                        name="message"
                        onChange={(e) => {
                           setComm(e.target.value);
                        }}
                     />
                  </div>
                  <p className={privacyPolicy}>
                     Нажимая на кнопку, вы соглашаетесь с политикой обработки
                     персональных данных
                  </p>
                  <div className={bottom}>
                     <div className={bottomButton}>
                        <button type="submit">
                           Отправить
                           <img
                              style={{ marginLeft: "20px" }}
                              src={arrowIcon}
                              alt="arrow"
                           />
                        </button>
                     </div>
                  </div>
               </div>
            </form>
         </div>
      </div>
   );
};
export default ModalWindow;

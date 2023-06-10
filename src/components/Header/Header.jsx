import React, { useEffect, useState } from "react";
import styles from "./Header.module.css";
import logo from "../../assets/imgs/logo-header2.png";

import whatsappIcon from "../../assets/icons/whatsapp-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import arrowIcon from "../../assets/icons/arrow-icon.svg";
import { Link } from "react-scroll";
import Sidebar from "../Sidebar/Sidebar";
import { useModal } from "../../contexts/modalContext";
const Header = () => {
   const {
      wrapper,
      bottom,
      burgerButton,
      top,
      topContacts,
      topContactsItem,
      navbar,
      bottomContacts,
      stick,
      rightStickActive,
      leftStickActive,
   } = styles;
   const [isActive, setIsActive] = useState(false);
   useEffect(() => {
      if (isActive) {
         document.body.style.overflow = "hidden";
      } else {
         document.body.style.overflow = "visible";
      }
   }, [isActive]);
   const { setIsModelOpen } = useModal();
   return (
      <>
         <Sidebar isActive={isActive} setIsActive={setIsActive} />
         <div className={wrapper}>
            <div className={top}>
               <a href="#">
                  <img src={logo} alt="logo" />
               </a>
               <div
                  className={burgerButton}
                  onClick={() => setIsActive(!isActive)}
               >
                  <div
                     className={
                        isActive ? `${rightStickActive} ${stick}` : stick
                     }
                  ></div>
                  <div
                     className={
                        isActive ? `${leftStickActive} ${stick}` : stick
                     }
                  ></div>
                  <div
                     style={{
                        marginLeft: "7px",
                        display: isActive ? "none" : "block",
                     }}
                     className={stick}
                  ></div>
               </div>
               <div className={topContacts}>
                  <div className={topContactsItem}>
                     <a href="tel:89240055050"> +7 (924) 005-50-50</a>
                     <img src={arrowIcon} alt="arrow" />
                  </div>
                  <div className={topContactsItem}>
                     <a
                        href="#"
                        onClick={(e) => {
                           e.preventDefault();
               
                           setIsModelOpen(true);
                        }}
                     >
                        Заказать обратный звонок
                     </a>
                     <img src={arrowIcon} alt="arrow" />
                  </div>
               </div>
            </div>
            <div className={bottom}>
               <div className={navbar}>
                  <Link to="aboutUs" smooth>
                     О НАС
                  </Link>
                  <Link to="popularModels" smooth>
                     ПОПУЛЯРНЫЕ МОДЕЛИ
                  </Link>
                  <Link to="howWeWork" smooth>
                     КАК ЗАКАЗАТЬ АВТО
                  </Link>
                  <Link to="bestOffers" smooth>
                     СПЕЦ ТЕХНИКА
                  </Link>

                  <Link to="workBenefits" smooth>
                     ПОЧЕМУ МЫ
                  </Link>
                  <Link to="buyBenefits" smooth>
                     КАК КУПИТЬ?
                  </Link>
                  <Link to="footer" smooth>
                     КОНТАКТЫ
                  </Link>
               </div>
               <div className={bottomContacts}>
       
                  <a href="https://m.vk.com/id806266562">
                     <img src={whatsappIcon} alt="whatsapp" />
                  </a>
                  <a href="https://instagram.com/dv_alliance?igshid=MmJiY2I4NDBkZg==">
                     <img src={instagramIcon} alt="instagram" />
                  </a>
               </div>
            </div>
         </div>
      </>
   );
};

export default Header;

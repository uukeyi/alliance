import React from "react";
import styles from "./Footer.module.css";
import logo from "../../assets/imgs/logo-footer2.png";
import arrowIcon from "../../assets/icons/arrow-icon.svg";

import whatsappIcon from "../../assets/icons/whatsapp-icon.svg";
import instagramIcon from "../../assets/icons/instagram-icon.svg";
import { Link } from "react-scroll";
import { useModal } from "../../contexts/modalContext";
const Footer = () => {
   const {
      logoImage,
      footer,
      wrapper,
      itemsWrapper,
      contactsIcons,
      itemsContainer,
      contactsWrapper,
   } = styles;
   const { setIsModelOpen } = useModal();
   return (
      <footer id="footer" className={footer}>
         <div className="container">
            <div className={wrapper}>
               <img src={logo} alt="logo" className={logoImage} />
               <div className={itemsContainer}>
                  <div className={itemsWrapper}>
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
                  </div>
                  <div className={itemsWrapper}>
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
               </div>
               <div className={contactsWrapper}>
                  <a href="tel:89613339797">
                     +7 (961) 333-97-97
                     <img src={arrowIcon} alt="arrow" />
                  </a>
                  <a
                     href="#"
                     onClick={(e) => {
                        e.preventDefault();
                        setIsModelOpen(true);
                     }}
                  >
                     Заказать обратный звонок{" "}
                     <img src={arrowIcon} alt="arrow" />
                  </a>
                  <div className={contactsIcons}>
                     <a href="https://m.vk.com/id806266562">
                        <img src={whatsappIcon} alt="whatsapp" />
                     </a>
                     <a href="https://instagram.com/dv_alliance?igshid=MmJiY2I4NDBkZg==">
                        <img src={instagramIcon} alt="instagram" />
                     </a>
                  </div>
               </div>
            </div>
         </div>
      </footer>
   );
};

export default Footer;

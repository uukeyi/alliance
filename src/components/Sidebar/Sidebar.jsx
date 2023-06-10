import React from "react";
import styles from "./Sidebar.module.css";
import logoSrc from "../../assets/imgs/logo.png";
import { Link } from "react-scroll";
import arrowSrc from "../../assets/imgs/sideBarArrow.png";

import instagramSrc from "../../assets/icons/instagram-icon.svg";
import whatsappSrc from "../../assets/icons/whatsapp-icon.svg";
const Sidebar = ({ isActive, setIsActive }) => {
   const {
      coverSidebar,
      sidebarContainer,
      coverSidebarActive,
      sidebarContainerHeader,
      logoSidebar,
      sidebarList,
      sidebarPhoneNumber,
      sidebarPhoneNumberContainer,
      sidebarSocialLinksContainer,
   } = styles;
   return (
      <div className={isActive ? coverSidebarActive : coverSidebar}>
         <div className={sidebarContainer}>
            <div className={sidebarContainerHeader}>
               <img className={logoSidebar} src={logoSrc} alt="ДВ Альянс" />
            </div>
            <div
               style={{
                  marginTop: "5px",
                  height: "1px",
                  background: "#454545",
               }}
            ></div>
            <ul className={sidebarList}>
               <Link
                  onClick={() => {
                     setIsActive(false);
                  }}
                  to="aboutUs"
                  smooth
               >
                  О нас
               </Link>
               <Link
                  onClick={() => {
                     setIsActive(false);
                  }}
                  to="howWeWork"
                  smooth
               >
                  Как заказать авто
               </Link>
               <Link
                  onClick={() => {
                     setIsActive(false);
                  }}
                  to="popularModels"
                  smooth
               >
                  Популярные модели
               </Link>
               <Link
                  onClick={() => {
                     setIsActive(false);
                  }}
                  to="bestOffers"
                  smooth
               >
                  спец техника
               </Link>
               <Link
                  onClick={() => {
                     setIsActive(false);
                  }}
                  to="buyBenefits"
                  smooth
               >
                  как купить?
               </Link>
               <Link
                  onClick={() => {
                     setIsActive(false);
                  }}
                  to="footer"
                  smooth
               >
                  Контакты
               </Link>
            </ul>
            <div className={sidebarPhoneNumberContainer}>
               <a href="tel:89240055050" className={sidebarPhoneNumber}>
                  +7 (924) 005-50-50
               </a>

               <img src={arrowSrc} alt=">" />
            </div>
            <div className={sidebarSocialLinksContainer}>
               <a href="https://m.vk.com/id806266562">
                  <img src={whatsappSrc} alt="Вотсап" />
               </a>
               <a href="https://instagram.com/dv_alliance?igshid=MmJiY2I4NDBkZg==">
                  <img src={instagramSrc} alt="Инстаграм" />
               </a>
            </div>
         </div>
      </div>
   );
};

export default Sidebar;

import { useEffect } from "react";
import AboutUsSection from "./components/AboutUsSection/AboutUsSection";
import WorkBenefitsSection from "./components/BenefitsSection/WorkBenefitsSection";

import BestOffersSection from "./components/BestOffersSection/BestOffersSection";
import BuyBenefitsSection from "./components/BuyBenefitsSection/BuyBenefitsSection";
import ClearanceSection from "./components/ClearanceSection/ClearanceSection";
import Footer from "./components/Footer/Footer";
import HeroSection from "./components/HeroSection/HeroSection";
import HowWeWorkSection from "./components/HowWeWorkSection/HowWeWorkSection";
import ModalWindow from "./components/ModalWindow/ModalWindow";
import PopularModelsSection from "./components/PopularModelsSection/PopularModelsSection";
import QuestionsSection from "./components/QuestionsSection/QuestionsSection";
import ReviewsSection from "./components/ReviewsSection/ReviewsSection";
import { useModal } from "./contexts/modalContext";

function App() {
   const { modalIsOpen } = useModal();
   useEffect(() => {
      if (modalIsOpen) {
         document.body.style.overflow = "hidden";
      } else {
        document.body.style.overflow = "visible";
      }
   }, [modalIsOpen]);
   return (
      <div className="App">
         <HeroSection />
         <AboutUsSection />
         <PopularModelsSection />
         <HowWeWorkSection />
         <BestOffersSection />
         <WorkBenefitsSection />
         <ReviewsSection />
         <BuyBenefitsSection />
         <ClearanceSection />
         <QuestionsSection />
         <Footer />
         <ModalWindow />
      </div>
   );
}

export default App;

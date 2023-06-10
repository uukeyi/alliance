import { createContext, useContext, useState } from "react";

const ModalContext = createContext();
export const useModal = () => {
   return useContext(ModalContext);
};
export const ModalProvider = ({ children }) => {
   const [modalIsOpen, setIsModelOpen] = useState(false);
   return (
      <ModalContext.Provider
         value={{
            modalIsOpen: modalIsOpen,
            setIsModelOpen: setIsModelOpen,
         }}
      >
         {children}
      </ModalContext.Provider>
   );
};

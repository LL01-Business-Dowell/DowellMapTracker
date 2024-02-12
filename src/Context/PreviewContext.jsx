import React, { useContext } from "react";
import { useEffect, useState } from "react";
import axios from "axios";

const PreviewContext = React.createContext();

// eslint-disable-next-line react/prop-types
const PreviewProvider = ({ children }) => {

  const [stands, setStands] = useState();

  const [currentStandSelection,setCurrentStandSelection] = useState();


  return (
    <PreviewContext.Provider
      value={{
        stands,
        setStands,
        currentStandSelection,
        setCurrentStandSelection
      }}
    >
      {children}
    </PreviewContext.Provider>
  );
};

export const useGlobalContext = () => {
  return useContext(PreviewContext);
};

export { PreviewContext, PreviewProvider };

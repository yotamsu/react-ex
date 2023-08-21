import React, { useState } from "react";

const ExpendContext = React.createContext({
  expend: "",
  onExpend: () => {},
});

export const ExpendContextProvider = (props) => {
  const [expendedComp, setExpendedComp] = useState("");

  const expendHandler = (currentExpend) => {
    setExpendedComp(currentExpend);
  };

  return (
    <ExpendContext.Provider
      value={{
        expend: expendedComp,
        onExpend: expendHandler,
      }}
    >
      {props.children}
    </ExpendContext.Provider>
  );
};

export default ExpendContext;

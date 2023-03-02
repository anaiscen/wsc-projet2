import React, { createContext, useContext, useState } from "react";
import PropTypes from "prop-types";

const ChoiceContext = createContext();

export function useChoice() {
  return useContext(ChoiceContext);
}

export function ChoiceProvider({ children }) {
  const [choice, setChoice] = useState("movie");
  const value = React.useMemo(
    () => ({ choice, setChoice }),
    [choice, setChoice]
  );

  return (
    <ChoiceContext.Provider value={value}>{children}</ChoiceContext.Provider>
  );
}
ChoiceProvider.propTypes = {
  children: PropTypes.element.isRequired,
};

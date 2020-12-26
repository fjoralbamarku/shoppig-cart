import React, { useContext, useReducer, useEffect } from "react";
import { data } from "./data";
import { reducer } from "./reducer";
const AppContext = React.createContext();
const defaultState = { items: data, loading: false, amount: 0, total: 0 };

const AppProvider = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, defaultState);

  const increaseItem = (id) => {
    dispatch({ type: "INCREASE", payload: id });
  };

  const findTotal = () => {
    dispatch({ type: "GET_TOTAL" });
  };

  const decreaseItem = (id) => {
    dispatch({ type: "DECREASE", payload: id });
  };

  const removeItem = (id) => {
    dispatch({ type: "REMOVE_ITEM", payload: id });
  };
  const clear_all = () => {
    dispatch({ type: "CLEAR_ALL" });
  };
  useEffect(() => {
    dispatch({ type: "GET_TOTAL" });
  }, [state.items]);
  return (
    <div>
      <AppContext.Provider
        value={{
          ...state,
          removeItem,
          increaseItem,

          decreaseItem,

          findTotal,
          clear_all,
        }}
      >
        {children}
      </AppContext.Provider>
    </div>
  );
};
export const useGlobalContext = () => {
  return useContext(AppContext);
};
export { AppProvider, AppContext };

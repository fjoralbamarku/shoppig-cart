import React, { useContext, useState } from "react";
import { data } from "./data";
const AppContext = React.createContext();
const AppProvider = ({ children }) => {
  const [items, setItems] = useState(data);

  const [amounts, setAmounts] = useState(
    items.map((item) => {
      return item.amount;
    })
  );
  const [bag, setBag] = useState(amounts.reduce((a, b) => a + b));
  console.log("amountettt", amounts);

  const increaseItem = (id) => {
    const temp = amounts;
    temp[id - 1] = temp[id - 1] + 1;

    setAmounts(temp);
    setBag(amounts.reduce((a, b) => a + b));

    console.log("inkriz", id, temp, "aounti", amounts);
  };

  const decreaseItem = (id) => {
    const temp = amounts;
    if (temp[id - 1] === 1) {
      removeItem(id);
    } else {
      temp[id - 1] = temp[id - 1] - 1;

      setAmounts(temp);
      setBag(amounts.reduce((a, b) => a + b));

      console.log("inkriz", id, temp, "aounti", amounts);
    }
  };

  const removeItem = (id) => {
    setItems((items) => {
      return items.filter((item) => item.id !== id);
    });
    console.log("diiii", id);
  };
  return (
    <div>
      <AppContext.Provider
        value={{
          items,
          removeItem,
          increaseItem,
          amounts,
          bag,
          setBag,
          decreaseItem,
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

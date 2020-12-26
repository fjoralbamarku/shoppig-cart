import React from "react";
export const reducer = (state, action) => {
  if (action.type === "REMOVE_ITEM") {
    const newItems = state.items.filter((item) => item.id !== action.payload);
    return { ...state, items: newItems };
  }

  if (action.type === "CLEAR_ALL") {
    return { ...state, items: [] };
  }

  if (action.type === "INCREASE") {
    let tempItems = state.items.map((item) => {
      if (item.id === action.payload) {
        return { ...item, amount: item.amount + 1 };
      }
      return item;
    });

    return { ...state, items: tempItems };
  }
  if (action.type === "DECREASE") {
    let tempItems = state.items
      .map((item) => {
        if (item.id === action.payload) {
          return { ...item, amount: item.amount - 1 };
        }
        return item;
      })
      .filter((item) => item.amount !== 0);
    return { ...state, items: tempItems };
  }
  if (action.type === "GET_TOTAL") {
    let { total, amount } = state.items.reduce(
      (itemsTotal, singleItem) => {
        const { price, amount } = singleItem;
        const itemTotal = price * amount;

        itemsTotal.total += itemTotal;
        itemsTotal.amount += amount;
        return itemsTotal;
      },
      {
        total: 0,
        amount: 0,
      }
    );
    total = parseFloat(total.toFixed(2));

    return { ...state, total, amount };
  }

  if (action.type === "LOADING") {
    return { ...state, loading: true };
  }
  if (action.type === "DISPLAY_ITEMS") {
    return { ...state, items: action.payload, loading: false };
  }
};

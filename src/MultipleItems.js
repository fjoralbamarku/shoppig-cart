import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import SingleItem from "./SingleItem";

const MultipleItems = () => {
  const {
    items,
    clear_all,

    total,
    amount,
  } = useGlobalContext();
  if (items.length === 0) {
    return (
      <section>
        <header className="center">
          <h2>Your bag is currently empty...</h2>
        </header>
      </section>
    );
  }

  return (
    <div className="productsDiv">
      <br></br>
      <img src="bag.png" alt="bag" className="bagIcon" />
      <h1 className="center totalPosition">{amount}</h1>
      {items.map((item) => {
        return <SingleItem {...item} key={item.id} />;
      })}
      <h2 className="totalPrice">Total ${total}</h2>
      <button onClick={() => clear_all()} className="clearBtn center">
        Clear all items
      </button>
    </div>
  );
};
export default MultipleItems;

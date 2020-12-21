import React, { useEffect, useState } from "react";
import { useGlobalContext } from "./context";
import SingleItem from "./SingleItem";

const MultipleItems = () => {
  const { items, amounts, bag, setBag } = useGlobalContext();

  return (
    <div className="productsDiv">
      <h1 className="center">{bag}</h1>
      {items.map((item) => {
        return <SingleItem {...item} key={item.id} />;
      })}
    </div>
  );
};
export default MultipleItems;

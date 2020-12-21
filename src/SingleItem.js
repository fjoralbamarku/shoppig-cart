import React from "react";
import { useGlobalContext } from "./context";

const SingleItem = ({ img, title, price, id, amount }) => {
  const { removeItem } = useGlobalContext();
  const { increaseItem, decreaseItem, amounts } = useGlobalContext();

  return (
    <div className="productDiv">
      <img src={img} alt="foto produkti" className="productImg" />
      <h2 className="title">{title}</h2>
      <h4 className="price">${price}</h4>
      <button onClick={() => removeItem(id)} className="removeBtn">
        remove
      </button>
      <input
        className="inputPosition"
        type="number"
        id="amount"
        name="amount"
        min="0"
        placeholder={amounts[id - 1]}
        disabled="disabled"
      ></input>

      <img
        className="arrowUp"
        src="arrow.png"
        alt="foto"
        onClick={() => increaseItem(id)}
      />

      <img
        className="arrowDown"
        src="arrow.png"
        alt="foto"
        onClick={() => decreaseItem(id)}
      />
    </div>
  );
};
export default SingleItem;

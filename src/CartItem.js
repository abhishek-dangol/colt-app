import React from "react";

const CartItem = ({ id, name, price, qty, updateQuantity }) => {
  const addOne = () => {
    updateQuantity(id, qty + 1);
  };
  const subOne = () => {
    updateQuantity(id, qty - 1);
  };
  return (
    <div className="CartItem">
      <div>{name}</div>
      <div>${price}</div>
      <div>
        <button onClick={subOne} disabled={qty <= 0}>
          -
        </button>
        {qty}
        <button onClick={addOne}>+</button>
      </div>

      <div>Total: ${qty * price}</div>
    </div>
  );
};

export default CartItem;

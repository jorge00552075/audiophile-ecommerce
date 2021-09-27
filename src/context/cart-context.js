import React, { useReducer } from "react";

const CartContext = React.createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
});

const INITIAL_STATE = [
  { name: "YX1 Wireless Earphones", price: 599, quantity: 1 },
  { name: "XX59 Headphones", price: 899, quantity: 1 },
  { name: "XX99 Mark I Headphones", price: 1750, quantity: 1 },
];

function reducer(state, action) {
  console.log(state);
  if (action.type === "ADD_ITEM") {
    let newState1 = [...state];
    if (newState1.find((item) => item.name === action.payload.name)) {
      return state.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, quantity: item.quantity + action.payload.quantity };
        } else {
          return item;
        }
      });
    } else {
      newState1.push({
        name: action.payload.name,
        price: action.payload.price,
        quantity: action.payload.quantity,
      });
    }
  }
  return state;
}

export function CartContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, INITIAL_STATE);

  function addItemHandler(item) {
    dispatch({
      type: "ADD_ITEM",
      payload: { name: item.name, price: item.price, quantity: item.quantity },
    });
  }

  function removeItemHandler() {
    dispatch({ type: "REMOVE_ITEM" });
  }

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;

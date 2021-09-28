import React, { useReducer } from "react";

const CartContext = React.createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
});

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
};

function reducer(state, action) {
  if (action.type === ACTIONS.ADD_ITEM) {
    let newState = [...state];
    if (newState.find((item) => item.name === action.payload.name)) {
      return newState.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, quantity: item.quantity + action.payload.quantity };
        } else {
          return item;
        }
      });
    } else {
      return [
        ...newState,
        {
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
          image: action.payload.image,
        },
      ];
    }
  }

  if (action.type === ACTIONS.REMOVE_ITEM) {
    // ...
  }

  return state;
}

export function CartContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, []);

  function addItemHandler(item) {
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: {
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      },
    });
  }

  function removeItemHandler() {
    dispatch({ type: ACTIONS.REMOVE_ITEM });
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

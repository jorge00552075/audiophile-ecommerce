import React, { useReducer } from "react";

const CartContext = React.createContext({
  cart: [],
  addItem: () => {},
  removeItem: () => {},
  removeAll: () => {},
});

const ACTIONS = {
  ADD_ITEM: "ADD_ITEM",
  REMOVE_ITEM: "REMOVE_ITEM",
  REMOVE_ALL: "REMOVE_ALL",
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
          id: action.payload.id,
          name: action.payload.name,
          price: action.payload.price,
          quantity: action.payload.quantity,
          image: action.payload.image,
        },
      ];
    }
  }

  if (action.type === ACTIONS.REMOVE_ITEM) {
    let newState = [...state];
    // prettier-ignore
    if (newState.find((item) => item.name === action.payload.name).quantity > 1) {
      return newState.map((item) => {
        if (item.name === action.payload.name) {
          return { ...item, quantity: item.quantity - action.payload.quantity };
        } else {
          return item;
        }
      });
    } else {
      return newState.filter((item, i) => item.name !== action.payload.name);
    }
  }

  if (action.type === ACTIONS.REMOVE_ALL) {
    return [];
  }

  return state;
}

export function CartContextProvider(props) {
  const [state, dispatch] = useReducer(reducer, []);

  function addItemHandler(item) {
    dispatch({
      type: ACTIONS.ADD_ITEM,
      payload: {
        id: item.id,
        name: item.name,
        price: item.price,
        quantity: item.quantity,
        image: item.image,
      },
    });
  }

  function removeItemHandler(item) {
    dispatch({
      type: ACTIONS.REMOVE_ITEM,
      payload: { name: item.name, quantity: item.quantity },
    });
  }

  const removeAllHandler = () => dispatch({ type: ACTIONS.REMOVE_ALL });

  return (
    <CartContext.Provider
      value={{
        cart: state,
        addItem: addItemHandler,
        removeItem: removeItemHandler,
        removeAll: removeAllHandler,
      }}
    >
      {props.children}
    </CartContext.Provider>
  );
}

export default CartContext;

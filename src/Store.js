import { createContext, useReducer } from "react";

export const Store = createContext();

const initialState = {
  cart: {
    cartItems: [],
    userInfo: {},
  },
};
function reducer(state, action) {
  switch (action.type) {
    case "ADD_TO_CART": {
      const cartItems = [...state.cart.cartItems, action.payload];
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    case "ORDER":
      return {
        ...state,
        cart: { ...state.cart, userInfo: action.payload },
      };
    case "SUBMIT":
      return {
        ...state,
        cart: { cartItems: [] },
      };
    case "REMOVE": {
      const cartItems = state.cart.cartItems.filter(
        (item) => item.id !== action.payload
      );
      return { ...state, cart: { ...state.cart, cartItems } };
    }
    default:
      return state;
  }
}

export function StoreProvider(props) {
  const [state, dispatch] = useReducer(reducer, initialState);
  const value = { state, dispatch };
  return <Store.Provider value={value}>{props.children} </Store.Provider>;
}

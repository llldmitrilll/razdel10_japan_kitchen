import { useReducer } from "react";
import CartContext from "./CartContext";

const defaultCartState = {
   items: [],
   totalAmount: 0
};

const cartReducer = (state, action) => {
   if (action.type === 'ADD_ITEM') {
      const updateTotalAmount = state.totalAmount + (action.item.price * action.item.amount);

      const existingCartItemIndex = state.items.findIndex(item => { return item.id === action.item.id; });

      const existingCartItem = state.items[existingCartItemIndex];
      let updateItem;
      let updateItems;

      if (existingCartItem) {
         updateItem = { ...existingCartItem, amount: existingCartItem.amount + action.item.amount };
         updateItems = [...state.items];
         updateItems[existingCartItemIndex] = updateItem;
      } else {
         updateItem = { ...action.item }
         updateItems = state.items.concat(updateItem)
      }

      return {
         items: updateItems,
         totalAmount: updateTotalAmount
      }
   }

   if (action.type === "REMOVE_ITEM") {
      const existingCartItemIndex = state.items.findIndex(item => { return item.id === action.id; });

      const existingCartItem = state.items[existingCartItemIndex];
      let updateTotalAmount = state.totalAmount - existingCartItem.price;

      let updateItems;
      if (existingCartItem.amount === 1) {
         updateItems = state.items.filter(item => (item.id !== existingCartItem.id))
      }
      else {
         const updateItem = { ...existingCartItem, amount: existingCartItem.amount - 1 };
         console.log('updateItems = ', updateItems);
         updateItems = [...state.items];
         console.log('updateItems = ', updateItems);
         updateItems[existingCartItemIndex] = updateItem;
      }


      return {
         items: updateItems,
         totalAmount: updateTotalAmount
      }


      // if (existingCartItem.totalAmount === 1) 
   }
   return defaultCartState;
};

const CartContextProvider = (props) => {
   const [cartState, dispatchCartAction] = useReducer(cartReducer, defaultCartState);

   const addItemHandler = (item) => {
      dispatchCartAction({
         type: 'ADD_ITEM',
         item: item
      }
      );
   };

   const removeItemHandler = (id) => {
      dispatchCartAction({
         type: 'REMOVE_ITEM',
         id: id

      })
   };

   const cartContext = {
      items: cartState.items,
      totalAmount: cartState.totalAmount,
      addItem: addItemHandler,
      removeItem: removeItemHandler
   }

   return (
      <CartContext.Provider value={cartContext}>
         {props.children}
      </CartContext.Provider>
   );
};

export default CartContextProvider;
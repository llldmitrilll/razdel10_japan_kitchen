import CartContext from "./CartContext";



const CartContextProvider = (props) => {
   return <CartContext.Provider>{props.children}</CartContext.Provider>
}
import React, { useContext } from "react";
import CartContext from "../../store/CartContext";
import styles from './Cart.module.css';
import CartItem from "./CartItem";
import Modal from "./Modal";



const Cart = (props) => {
   const cartContext = useContext(CartContext);

   const totalAmount = `$${cartContext.totalAmount.toFixed(2)}`;
   const hasItems = cartContext.items.length > 0;

   const addCartItemHandler = (item) => {
      cartContext.addItem({ ...item, amount: 1 })
   }

   const removeCartItemHandler = (id) => {
      cartContext.removeItem(id);
   }

   const cartItems = (
      <ul className={styles['cart-items']}>
         {cartContext.items.map(item => (
            <CartItem
               key={item.id}
               name={item.name}
               amount={item.amount}
               price={item.price}
               onAdd={addCartItemHandler.bind(null, item)}
               onRemove={removeCartItemHandler.bind(null, item.id)}
            />
         ))}
      </ul>
   )

   return (
      <Modal onHideCart={props.onHideCart}>
         {cartItems}
         <div className={styles.total}>
            <span>Итого</span>
            <span>{totalAmount}</span>
         </div>
         <div className={styles.actions}>
            {hasItems && <button className={styles.button}>Заказать</button>}
            <button className={styles['button-alt']} onClick={props.onHideCart}>Закрыть</button>
         </div>
      </Modal>
   )
}

export default Cart;
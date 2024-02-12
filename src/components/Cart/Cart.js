import React from "react";
import styles from './Cart.module.css';
import Modal from "./Modal";

const cartItems = 'Hello'
// (
//    <ul className={styles['cart-items']}>
//       {[{
//          id: 'm1',
//          name: 'name1',
//          amount: 2,
//          price: 10
//       }].map(item => {
//          <li>{item.name}</li>
//       })}
//    </ul>
// )

const Cart = (props) => {
   return (
      <Modal onHideCart={props.onHideCart}>
         {cartItems}
         <div className={styles.total}>
            <span>Итого</span>
            <span>$49.99</span>
         </div>
         <div className={styles.actions}>
            <button className={styles.button}>Заказать</button>
            <button className={styles['button-alt']} onClick={props.onHideCart}>Закрыть</button>
         </div>
      </Modal>
   )
}

export default Cart;
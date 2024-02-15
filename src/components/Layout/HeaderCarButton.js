import { useContext, useEffect, useState } from 'react';
import CartContext from '../../store/CartContext';
import CartIcon from '../Cart/CarIcon';
import styles from './HeaderCarButton.module.css';

const HeaderCarButton = (props) => {
   const [isButtonBump, setIsButtonBump] = useState(false);

   const cartContext = useContext(CartContext);

   useEffect(() => {
      setIsButtonBump(true);
      const timer = setTimeout(() => { setIsButtonBump(false) }, 300);
      return () => { clearTimeout(timer) }

   }, [cartContext.items])

   const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
      return currentValue + item.amount;
   }, 0);

   let buttonBump = `${styles.button} ${isButtonBump ? styles.bump : ''}`;

   return (
      <button className={buttonBump} onClick={props.onShowCart}>
         <span className={styles.icon}> <CartIcon /> </span>
         <span>Корзина</span>
         <span className={styles.badge}>{cartItemsNumber}</span>
      </button>
   )
};

export default HeaderCarButton;
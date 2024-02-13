import { useContext } from 'react';
import CartContext from '../../store/CartContext';
import CartIcon from '../Cart/CarIcon';
import styles from './HeaderCarButton.module.css';

const HeaderCarButton = (props) => {

   const cartContext = useContext(CartContext);

   const cartItemsNumber = cartContext.items.reduce((currentValue, item) => {
      return currentValue + item.amount;
   }, 0);

   return (
      <button className={styles.button} onClick={props.onShowCart}>
         <span className={styles.icon}> <CartIcon /> </span>
         <span>Корзина</span>
         <span className={styles.badge}>{cartItemsNumber}</span>
      </button>
   )
};

export default HeaderCarButton;
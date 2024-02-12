import CartIcon from '../Cart/CarIcon';
import styles from './HeaderCarButton.module.css';

const HeaderCarButton = (props) => {
   return (
      <button className={styles.button} onClick={props.onShowCart}>
         <span className={styles.icon}> <CartIcon /> </span>
         <span>Корзина</span>
         <span className={styles.badge}>2</span>
      </button>
   )
};

export default HeaderCarButton;
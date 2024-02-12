import HeaderCarButton from './HeaderCarButton';
import styles from './Header.module.css';
import sushiImage from '../../assets/sushi.jpg'

const Header = (props) => {
   return (
      <header>
         <div className={styles.header}>
            <h1>Япона Кухня</h1>
            <HeaderCarButton onShowCart={props.onShowCart} />
         </div>
         <div className={styles['main-image']}>
            <img src={sushiImage} alt='Блюдо японской кухни' />
         </div>

      </header>
   )
};

export default Header;
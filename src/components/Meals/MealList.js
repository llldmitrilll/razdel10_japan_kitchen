import MealItem from "./MealItem";
import styles from './MealList.module.css';
import Card from "../UI/Card";

const DUMMY_MEALS = [
   {
      id: 'm1',
      name: 'name1',
      description: 'description',
      price: 10
   },
   {
      id: 'm2',
      name: 'name2',
      description: 'description',
      price: 11
   },
   {
      id: 'm3',
      name: 'name3',
      description: 'description',
      price: 12
   },
   {
      id: 'm4',
      name: 'name4',
      description: 'description',
      price: 13
   }
]
const MealList = () => {
   const mealList = DUMMY_MEALS.map((meal) => <MealItem key={meal.id} id={meal.id} name={meal.name} description={meal.description} price={meal.price} />);
   return (
      <section className={styles.meals}>
         <ul>
            <Card>
               {mealList}
            </Card>
         </ul>

      </section>
   )
};

export default MealList;
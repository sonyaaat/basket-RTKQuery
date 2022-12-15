import BasketList from '../BasketList/BasketList';
import css from '../Basket/Basket.module.css';
const Basket = () => {
  return (
    <div className={css.container}>
      <BasketList />
    </div>
  );
};
export default Basket;

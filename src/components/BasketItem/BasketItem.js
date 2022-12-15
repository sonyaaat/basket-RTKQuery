import { useDeleteFromBasketMutation } from 'redux/productsSlice';
import css from '../MenuItem/Item.module.css';
import Loader2 from 'components/Loader/Loader2';
const BasketItem = ({ item }) => {
  const [deleteFromBasket, { isLoading }] = useDeleteFromBasketMutation();
  const handleDelete = async () => {
    try {
      await deleteFromBasket(item.id);
      console.log('deleted', item.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
    <li className={css.item}>
      <p className={css.name}>{item.name}</p>
      <div className={css.right}>
        {isLoading && <Loader2 />}
        <p className={css.price}>{item.price}</p>
        <button
          className={css.button}
          type="button"
          disabled={isLoading}
          onClick={handleDelete}
        >
          Delete
        </button>
      </div>
    </li>
  );
};
export default BasketItem;

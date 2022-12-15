import {
  useAddToBasketMutation,
  useGetBasketQuery,
  useDeleteFromBasketMutation,
} from 'redux/productsSlice';
import Loader2 from 'components/Loader/Loader2';
import css from "../MenuItem/Item.module.css"
import { clsx } from 'clsx';
const Item = ({ item }) => {
  const [addToBasket,{isLoading}] = useAddToBasketMutation();
  const [deleteFromBasket,{isLoading:isloading}] = useDeleteFromBasketMutation();
  const { data } = useGetBasketQuery();
  const isAvailable=()=>{
     const isInBasket = data.some(el => el.name === item.name);
     return isInBasket
  }
  
  const handleAdd = async () => {
    try {
      await addToBasket(item);
      console.log('added to basket');
    } catch (error) {
      console.log(error);
    }
  };
  const handleDelete = async () => {
    const index = data.find(el => el.name === item.name);
    console.log(index.id);
    try {
      await deleteFromBasket(index.id);
    } catch (error) {
      console.log(error);
    }
  };
  return (
   <>
   {data  &&
    <li className={css.item}>
    <p className={css.name}>{item.name}</p>
    <div className={css.right}>
    {(isLoading ||isloading) && <Loader2/>}
    <p className={css.price}>{item.price}</p>
    {!isAvailable() && (
      <button className={css.button} type="button" onClick={handleAdd}>
        Add to basket
      </button>
    )}
    {isAvailable() && (
      <button type="button" className={clsx(css.button,css.delete_button)} onClick={handleDelete}>
        Delete from basket
      </button>
    )}
    </div>
  </li>}
   </>
  );
};
export default Item;

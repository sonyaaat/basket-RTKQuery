import { useGetBasketQuery } from 'redux/productsSlice';
import BasketItem from '../BasketItem/BasketItem';
import css from '../MenuList/MenuList.module.css';
const BasketList = () => {
  const { data, error, isLoading } = useGetBasketQuery();

  return (
    <div className={css.wrapper}>
      {data && data.map(item => <BasketItem key={item.id} item={item} />)}
    </div>
  );
};
export default BasketList;

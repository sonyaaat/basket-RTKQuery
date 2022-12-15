import {
  useGetProductsQuery,
} from 'redux/productsSlice';
import css from '../MenuList/MenuList.module.css';
import Item from '../MenuItem/Item';
const MenuList = () => {
  const { data } = useGetProductsQuery();

  return <div className={css.wrapper}>
  {
    data && 
    data.map(item => <Item key={item.id} item={item} />)
    }
    </div>;
};
export default MenuList;

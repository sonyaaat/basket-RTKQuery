import { NavLink, Outlet } from 'react-router-dom';
import { useGetBasketQuery } from 'redux/productsSlice';
import Loader from '../Loader/Loader';
import { clsx } from 'clsx';
import css from '../Layout/Layout.module.css';
const Layout = () => {
  const { data, isLoading } = useGetBasketQuery();
  const getSum=()=>{
     const summary=data.reduce((prev,el)=>{
      return prev+Number(el.price)
    },0)
    return summary
  }
  
  return (
    <>
      <div className={css.layout}>
        <NavLink
          className={({ isActive }) =>
            isActive ? clsx(css.active,css.link) : css.link
          }
          to="/menu"
        >
          Menu
        </NavLink>
        <NavLink
          className={({ isActive }) =>
            isActive ? clsx(css.active,css.link) : css.link
          }
          to="/basket"
        >
          Basket
        </NavLink>
        {data && 
       <div className={css.info}>
        <p>Totally in basket: {data.length}</p> 
       <p> Total sum: {getSum()}</p>
       </div>
}

      </div>
      {isLoading && <Loader />}
      <Outlet />
    </>
  );
};
export default Layout;

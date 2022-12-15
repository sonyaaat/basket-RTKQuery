
import { Routes, Route,Navigate } from 'react-router-dom';
import Menu from './Menu/Menu';
import Layout from './Layout/Layout';
import Basket from './Basket/Basket';
export const App = () => {
  return (
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Navigate to="/menu"/>}/>
        <Route path="menu" element={<Menu />} />
        <Route path="basket" element={<Basket />} />
      </Route>
    </Routes>
  );
};

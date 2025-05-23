import { Outlet } from 'react-router-dom';
import { Header } from './Header';

const AppLayout = () => (
  <div className="App">
    <Header />
    <div className="container">
      <Outlet />
    </div>
  </div>
);

export { AppLayout };

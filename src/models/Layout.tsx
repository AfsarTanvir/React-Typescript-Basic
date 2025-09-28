import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'

function Layout() {
  return (
    <>
      <Navbar
        title="Afsar"
        about="About"
        home="Home"
        buttons="Buttons"
        id={2}
      />
      <Outlet />
    </>
  );
}

export default Layout
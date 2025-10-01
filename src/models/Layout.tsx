import Navbar from './Navbar'
import { Outlet } from 'react-router-dom'
import {normalFunctionStr} from './NormalFunction'

function Layout() {
  
  return (
    <>
      <Navbar
        title="Afsar"
        about="About"
        home="Home"
        buttons="Buttons"
        id={2}
        normalFunction={normalFunctionStr}
      />
      <Outlet />
    </>
  );
}

export default Layout
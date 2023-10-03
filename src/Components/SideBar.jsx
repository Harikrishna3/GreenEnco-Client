import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import './SideBar.css';


function SideBar() {
  const [sidebar, setSidebar] = useState(false);
  
  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>

      <div className='navbar'>
        <Link to='#' className='menu-bars'>
          <h1 onClick={showSidebar}>=</h1>
        </Link>
      </div>
      <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
        <ul className='nav-menu-items' onClick={showSidebar}>
          <li className='navbar-toggle'>
            <Link to='#' className='menu-bars'>
              <h1>X</h1>
            </Link>
          </li>
          <h2 ><Link to={'/'}>Dashboard</Link></h2>
          <ul>
            <li className={"nav-text"}><Link to={'/create'}>Create</Link></li>
            <li className={"nav-text"}><Link to={'/read'}>Read</Link></li>
            <li className={"nav-text"}><Link to={'/update'}>Update</Link></li>
            <li className={"nav-text"}><Link to={'/delete'}>Delete</Link></li>
          </ul>
        </ul>
      </nav>

    </>
  );
}

export default SideBar;
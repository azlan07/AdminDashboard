import React, { useState } from 'react';
import * as FaIcons from 'react-icons/fa';
import * as AiIcons from 'react-icons/ai';
import { Link } from 'react-router-dom';
import { SidebarData } from './SidebarData';
import './Navbar.css';
import { IconContext } from 'react-icons';

function NavbarAdmin() {
  const [sidebar, setSidebar] = useState(false);

  const showSidebar = () => setSidebar(!sidebar);

  return (
    <>
      <IconContext.Provider value={{ color: '#fff' }}>
        <nav className="navbar navbar-expand-lg navbar-light py-4 px-4">
          <Link to='#' className='menu-bars'>
            <FaIcons.FaBars onClick={showSidebar} />
          </Link>
          <div className="d-flex align-items-center ms-1 mt-2">
            <h2 className="fs-2 m-0 ms-3 me-5">Dashboard Admin</h2>
          </div>

          <button className="navbar-toggler mt-1" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse mt-2" id="navbarSupportedContent">
            <ul className="navbar-nav ms-auto mb-2 mb-lg-0" id='kanan'>
              <li>
                <a className="nav-link second-text fw-bold" href="/#" id="notifcation" role="button" data-bs-toggle="dropdown"
                  aria-expanded="false">
                  <i className="fa-sharp fa-solid fa-bell me-2"></i>
                </a>
              </li>
              <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle second-text fw-bold" href="/#" id="navbarDropdown" role="button"
                  data-bs-toggle="dropdown" aria-expanded="false">
                  <i className="fa-sharp fa-solid fa-user-secret me-2"></i>Administrator
                </a>
                <ul className="dropdown-menu" aria-labelledby="navbarDropdown" id="dropdown-menu">
                  <li><a className="dropdown-item" href="/#">Profile</a></li>
                  <li><a className="dropdown-item" href="/#">Settings</a></li>
                  <li><a className="dropdown-item" href="/#">Logout</a></li>
                </ul>
              </li>
            </ul>
          </div>
        </nav>
        <nav className={sidebar ? 'nav-menu active' : 'nav-menu'}>
          <ul className='nav-menu-items' onClick={showSidebar}>
            <li className='navbar-toggle'>
              <Link to='#' className='menu-bars'>
                <AiIcons.AiOutlineClose />
              </Link>
            </li>
            {SidebarData.map((item, index) => {
              return (
                <li key={index} className={item.cName}>
                  <Link to={item.path}>
                    {item.icon}
                    <span>{item.title}</span>
                  </Link>
                </li>
              );
            })}
          </ul>

        </nav>
      </IconContext.Provider>
    </>
  );
}

export default NavbarAdmin;

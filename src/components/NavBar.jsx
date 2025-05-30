import React from 'react';
import { NavLink } from 'react-router-dom';
import { nav } from '../config/nav';
import logo from '../assets/logo/Logo5crop.svg';
import '../styles/NavBar.css';

export default function NavBar() {
  return (
    <nav className="navbar">
      <div className="navbar-inner">
        <div className="logo">  
            <img src={logo} alt="School Logo" className="logo-image" />
        </div>
        <ul className="nav-links">
          {nav.map(item => (
            <li key={item.path} className={item.children ? 'dropdown' : ''}>
              <NavLink
                to={item.path}
                className={({ isActive }) =>
                  `nav-link${isActive ? ' active' : ''}`
                }
              >
                {item.label}
              </NavLink>
              {item.children && (
                <ul className="dropdown-menu">
                  {item.children.map(child => (
                    <li key={child.path}>
                      <NavLink
                        to={`${item.path}/${child.path}`}
                        className={({ isActive }) =>
                          `nav-link${isActive ? ' active' : ''}`
                        }
                      >
                        {child.label}
                      </NavLink>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}
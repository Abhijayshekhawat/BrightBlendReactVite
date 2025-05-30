// src/layouts/MainLayout.jsx
import React from 'react';
import { Outlet, useLocation } from 'react-router-dom';
import NavBar from '../components/NavBar';
import { nav } from '../config/nav';
import logo from '../assets/BrightBlendLogo.svg';
import backgroundImg from '../assets/Background/1.png';
import '../styles/MainLayout.css';

export default function MainLayout({ children }) {
  const location = useLocation();
  const isHomePage = location.pathname === '/';

  return (
    <div
      className="layout-container"
      style={
        isHomePage
          ? {
              backgroundImage: `url(${backgroundImg})`,
              backgroundSize: 'cover',
              backgroundPosition: 'center',
              backgroundRepeat: 'no-repeat',
              minHeight: '100vh',
              width: '100%',
            }
          : {}
      }
    >
      <NavBar />

      <main className="main-content">
        {children}
        <Outlet />
      </main>

      <footer className="site-footer">
        <div className="footer-container">
          {/* Logo & Contact */}
          <div className="footer-logo-col">
            <img src={logo} alt="BrightBlend logo" className="footer-logo" />
            <address className="footer-contact">
              <p>6358 Drury Lane, 
              <br />Near Bread of Life Church, 
              <br />Kitwe, Zambia</p>
              <br />
              <p>+260 956408816</p>
            </address>
          </div>

          {/* Quick Links */}
          <div className="footer-col">
            <h4 className="footer-col__title">Quick Links</h4>
            <ul className="footer-col__list">
              {nav
                .filter(item => !item.children || item.children.length === 0)
                .map(item => (
                  <li key={item.path}>
                    <a href={item.path}>{item.label}</a>
                  </li>
                ))}
            </ul>
          </div>

          {/* Columns for children */}
          {nav
            .filter(item => item.children && item.children.length > 0)
            .map(item => (
              <div key={item.path} className="footer-col">
                <h4 className="footer-col__title">{item.label}</h4>
                <ul className="footer-col__list">
                  {item.children.map(child => (
                    <li key={child.path}>
                      <a href={`${item.path}/${child.path}`}>{child.label}</a>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
        </div>

        <div className="footer-bottom">
          © {new Date().getFullYear()} BrightBlend Learning Hub. All rights reserved.
        </div>
      </footer>
    </div>
  );
}

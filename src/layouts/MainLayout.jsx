import React from 'react';
import { Outlet } from 'react-router-dom';
import NavBar from '../components/NavBar';
import '../styles/MainLayout.css';

export default function MainLayout({ children }) {
  return (
    <div className="layout-container">
      <NavBar />
      <main className="main-content">
        {children}
        <Outlet />
      </main>
      <footer className="site-footer">
        <div className="footer-content">
          © {new Date().getFullYear()} SchoolName. All rights reserved.
        </div>
      </footer>
    </div>
  );
}
// src/layouts/ProtectedLayout.jsx
import React from 'react';
import { Outlet } from 'react-router-dom';

export default function ProtectedLayout() {
  // TODO: swap this for your real auth‐check later
  return <Outlet />;
}

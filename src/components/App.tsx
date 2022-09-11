import { GlobalStyle } from './GlobalStyle';
import { Routes, Route } from 'react-router-dom';
import React, { lazy } from 'react';
import { SharedLayout } from './SharedLayout/SharedLayout';
import PrivateRoute from './PrivateRoute';
import PublicRoute from './PublicRoute';

const Register = lazy(() => import('../pages/Register/Register'));
const Login = lazy(() => import('../pages/Login/Login'));
const ContactsSection = lazy(
  () => import('../pages/ContactsSection/ContactsSection')
);
const Error = lazy(() => import('../pages/Error/Error'));
const Home = lazy(() => import('../pages/Home/Home'));

export const App: React.FC = () => {
  return (
    <>
      <GlobalStyle />
      <Routes>
        <Route path="/" element={<SharedLayout />}>
          <Route index element={<Home />} />
          <Route
            path="register"
            element={
              <PublicRoute restricted>
                <Register />'
              </PublicRoute>
            }
          />
          <Route
            path="login"
            element={
              <PublicRoute restricted>
                <Login />
              </PublicRoute>
            }
          />
          <Route
            path="contacts"
            element={
              <PrivateRoute>
                <ContactsSection />
              </PrivateRoute>
            }
          />
          <Route path="*" element={<Error />} />
        </Route>
      </Routes>
    </>
  );
};

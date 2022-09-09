import { Outlet } from 'react-router-dom';
import { Suspense } from 'react';
import { UserMenu } from 'components/UserMenu/UserMenu';
import { useAuth } from 'redux/useAuth';
import { Container, Nav, Navbar, Spinner } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { RiContactsBookLine } from 'react-icons/ri';
import { Box } from 'components/Box';

export const SharedLayout = () => {
  const auth = useAuth();

  return (
    <>
      <Navbar bg="primary" variant="dark">
        <Container>
          <Navbar.Brand as={NavLink} to="/">
            <RiContactsBookLine size="28px" /> Phonebook
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={NavLink} to="/">
              Home
            </Nav.Link>
            {auth.user && (
              <Nav.Link as={NavLink} to="/contacts">
                Contacts
              </Nav.Link>
            )}
          </Nav>
          <Nav className="ms-auto">
            {!auth.user && (
              <Nav.Link as={NavLink} to="/register">
                Sign Up
              </Nav.Link>
            )}
            {!auth.user && (
              <Nav.Link as={NavLink} to="/login">
                Sign In
              </Nav.Link>
            )}
            {auth.user && <UserMenu />}
          </Nav>
        </Container>
      </Navbar>

      <Suspense
        fallback={
          <Container>
            <Box display="flex" justifyContent="center" py={6}>
              <Spinner animation="border" role="status">
                <span className="visually-hidden">Loading...</span>
              </Spinner>
            </Box>
          </Container>
        }
      >
        <Outlet />
      </Suspense>
    </>
  );
};

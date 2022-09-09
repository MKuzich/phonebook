import { Box } from 'components/Box';
import { Title, Text } from './Home.styled';
import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { useAuth } from 'redux/useAuth';

const Home = () => {
  const auth = useAuth();
  return (
    <Container>
      <Box as="section" py={5}>
        <Title>Welcome to Phonebook!</Title>
        <Box display="flex" justifyContent="center" mt={5}>
          {!auth.user && (
            <Box>
              <Text>Please, login or sign up!</Text>
              <Box display="flex">
                <Box mr={4}>
                  <Button variant="outline-primary" as={NavLink} to="/register">
                    Sign Up
                  </Button>
                </Box>
                <Button as={NavLink} to="/login">
                  Sign In
                </Button>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

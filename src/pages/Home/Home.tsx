import { Box } from '../../components/Box';
import { Title, Text } from './Home.styled';
import { Container } from 'react-bootstrap';
import { useAuth } from '../../redux/useAuth';
import React from 'react';
import { ButtonLink } from '../../components/ButtonLink';

const Home: React.FC = () => {
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
                  <ButtonLink variant="outline-primary" to="/register">
                    Sign Up
                  </ButtonLink>
                </Box>
                <ButtonLink to="/login">Sign In</ButtonLink>
              </Box>
            </Box>
          )}
        </Box>
      </Box>
    </Container>
  );
};

export default Home;

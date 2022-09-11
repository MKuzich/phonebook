import { Container } from 'react-bootstrap';
import { Box } from '../../components/Box';
import { Message } from './Error.styled';
import React from 'react';
import { ButtonLink } from '../../components/ButtonLink';

const Error: React.FC = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" py={6}>
        <Box>
          <Message>Sorry, we cannot find this page!</Message>
          <Box display="flex" justifyContent="center" mt={5}>
            <ButtonLink variant="outline-primary" to="/">
              Back to home
            </ButtonLink>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Error;

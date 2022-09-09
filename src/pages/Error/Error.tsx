import { Button, Container } from 'react-bootstrap';
import { NavLink } from 'react-router-dom';
import { Box } from 'components/Box';
import { Message } from './Error.styled';

const Error = () => {
  return (
    <Container>
      <Box display="flex" justifyContent="center" py={6}>
        <Box>
          <Message>Sorry, we cannot find this page!</Message>
          <Box display="flex" justifyContent="center" mt={5}>
            <Button variant="outline-primary" as={NavLink} to="/">
              Back to home
            </Button>
          </Box>
        </Box>
      </Box>
    </Container>
  );
};

export default Error;

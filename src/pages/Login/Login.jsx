import { useLogInMutation } from 'redux/authApi';
import { setCredentials } from 'redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import { Title, Section, Spin } from './Login.styled';

const Login = () => {
  const [logIn, { isLoading }] = useLogInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async e => {
    e.preventDefault();
    const email = e.target.elements.email.value;
    const password = e.target.elements.password.value;
    try {
      const user = await logIn({ email, password }).unwrap();
      dispatch(setCredentials(user));
      navigate('/contacts');
      e.target.reset();
    } catch (err) {
      console.log(err);
    }
  };

  return (
    <Container>
      <Section>
        <Title>Sign In form for registered users</Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" name="email" placeholder="Enter email" />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control
              type="password"
              name="password"
              placeholder="Password"
            />
          </Form.Group>
          <Button type="submit">
            Sign In
            {isLoading && (
              <Spin animation="border" role="status" size="sm">
                <span className="visually-hidden">Loading...</span>
              </Spin>
            )}
          </Button>
        </Form>
      </Section>
    </Container>
  );
};

export default Login;

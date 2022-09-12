import { useLogInMutation } from '../../redux/authApi';
import { setCredentials } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import { Button, Form, Container } from 'react-bootstrap';
import { Title, Section, Spin } from './Login.styled';
import React from 'react';
import { IAuth } from '../../types/auth';
import { toast } from 'react-toastify';

interface FormElements extends HTMLFormControlsCollection {
  email: HTMLInputElement;
  password: HTMLInputElement;
}

const Login: React.FC = () => {
  const [logIn, { isLoading }] = useLogInMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const email = ((e.target as HTMLFormElement).elements as FormElements).email
      .value;
    const password = ((e.target as HTMLFormElement).elements as FormElements)
      .password.value;
    try {
      const user: IAuth = await logIn({
        email,
        password,
      }).unwrap();
      dispatch(setCredentials(user));
      navigate('/contacts');
      toast.success(`You logged succes: ${email}`);
      (e.target as HTMLFormElement).reset();
    } catch (err: any) {
      toast.error(`Email or password is wrong, try again: ${err.status}`);
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

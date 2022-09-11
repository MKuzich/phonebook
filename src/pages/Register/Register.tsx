import { useSignUpMutation } from '../../redux/authApi';
import { Button, Form, Container } from 'react-bootstrap';
import { Title, Section, Spin } from './Register.styled';
import { setCredentials } from '../../redux/authSlice';
import { useDispatch } from 'react-redux';
import { useNavigate } from 'react-router-dom';
import React from 'react';
import { IAuth } from '../../types/auth';

interface FormElements extends HTMLFormControlsCollection {
  name: HTMLInputElement;
  email: HTMLInputElement;
  password: HTMLInputElement;
}

const Register: React.FC = () => {
  const [signUp, { isLoading }] = useSignUpMutation();
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    const name: string = (
      (e.target as HTMLFormElement).elements as FormElements
    ).name.value;
    const email: string = (
      (e.target as HTMLFormElement).elements as FormElements
    ).email.value;
    const password: string = (
      (e.target as HTMLFormElement).elements as FormElements
    ).password.value;
    try {
      const user: IAuth = await signUp({
        name,
        email,
        password,
      }).unwrap();
      dispatch(setCredentials(user));
      navigate('/contacts');
      (e.target as HTMLFormElement).reset();
    } catch (err) {
      console.log(err);
    }
  };
  return (
    <Container>
      <Section>
        <Title>Sign Up form for new users</Title>

        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicName">
            <Form.Label>Name</Form.Label>
            <Form.Control type="text" name="name" placeholder="Enter name" />
          </Form.Group>
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
            Sign Up
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

export default Register;

import React from 'react';
import {Container} from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import { Link } from 'react-router-dom';

const Login = () => {
    return (
        <Container className='w-25 mx-auto'>
            <h2>Plase Login</h2>
             <Form>
      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control type="email" name='email' placeholder="Enter email" />
       
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name='password' placeholder="Password" />
      </Form.Group>
     
     
      <Button variant="primary" type="submit">
        Submit
      </Button>
      <br></br>
      <Form.Text className="text-secendary">
      Dont’t Have An Account ? 
         <Link to='/register'>Register</Link>
         </Form.Text>
      <Form.Text className="text-success">
         
        </Form.Text>
      <Form.Text className="text-danger">
         
        </Form.Text>
    </Form>
        </Container>
    );
};

export default Login;
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link, useLocation } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";
import { useNavigate } from "react-router-dom";
const Login = () => {
  const { signIn } = useContext(AuthContext);
  const navigate = useNavigate();
  const location = useLocation();
  const from = location.state?.from?.pathname || "/category/0";

  const handleLogin = (event) => {
    event.preventDefault();
    const form = event.target;
    const email = form.email.value;
    const pass = form.password.value;
    signIn(email, pass)
      .then((result) => {
        const logedUser = result.user;
        console.log(logedUser);
        alert("login succesfully");
        navigate(from,{replace:true});
      })
      .catch((error) => {
        console.log(error);
      });
  };
  return (
    <Container className="w-25 mx-auto">
      <h2>Plase Login</h2>
      <Form onSubmit={handleLogin}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Email address</Form.Label>
          <Form.Control type="email" name="email" placeholder="Enter email" />
        </Form.Group>

        <Form.Group className="mb-3" controlId="formBasicPassword">
          <Form.Label>Password</Form.Label>
          <Form.Control
            type="password"
            name="password"
            placeholder="Password"
          />
        </Form.Group>

        <Button variant="primary" type="submit">
          Login
        </Button>
        <br></br>
        <Form.Text className="text-secendary">
          Dont’t Have An Account ?<Link to="/register">Register</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Login;

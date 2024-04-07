
import { useContext } from "react";
import { Container } from "react-bootstrap";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import { Link } from "react-router-dom";
import { AuthContext } from "../../Providers/AuthProvider";

const Register = () => {
const {createUser}   =useContext(AuthContext);
    const handleRegister = (event) => {
      event.preventDefault();
      const form = event.target;
      const name = form.name.value;
      const photoUrl = form.photoUrl.value;
      const email = form.email.value;
      const pass = form.password.value;
      createUser(email, pass)
      .then(result => {
          const loggedUser = result.user;
          console.log(loggedUser);
      })
      .catch(error => {
          console.log(error.message);
      })

    };
    

  return (
    <Container className="w-25 mx-auto">
      <h2>Plase Register</h2>
      <Form onSubmit={handleRegister}>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Full Name</Form.Label>
          <Form.Control type="text" name="name" placeholder="Enter Full Name" />
        </Form.Group>
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>Photo Url</Form.Label>
          <Form.Control
            type="text"
            name="photoUrl"
            placeholder="Enter Photo URl"
          />
        </Form.Group>
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
          Submit
        </Button>
        <br></br>
        <Form.Text className="text-secendary">
          Already Have An Account ?<Link to="/login">Login</Link>
        </Form.Text>
        <Form.Text className="text-success"></Form.Text>
        <Form.Text className="text-danger"></Form.Text>
      </Form>
    </Container>
  );
};

export default Register;
<h1>THis is register page</h1>;

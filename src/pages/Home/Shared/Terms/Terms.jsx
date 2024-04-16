import React from "react";
import { Link } from "react-router-dom";

const Terms = () => {
  return (
    <div>
      <h2>Terms and Conditions</h2>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Tenetur quae
        ipsa adipisci eligendi, numquam error quas unde sunt molestias autem
        laudantium voluptatum reiciendis dolores impedit! Impedit aspernatur
        sapiente iste rerum?
      </p>
      <p>
        Go back<Link to="/register">Register</Link>
      </p>
    </div>
  );
};

export default Terms;

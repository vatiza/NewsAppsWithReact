import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <div>
      <p className="text-center ">This is Footer</p>
      <Link to="/location">My Location</Link>
    </div>
  );
};

export default Footer;

import { Button, ListGroup } from "react-bootstrap";
import { FaGoogle, FaGithub, FaFacebook, FaTwitter, FaYoutube } from "react-icons/fa";
import QZone from "../QZone/QZone";


const RightNav = () => {
    return (
        <div>
            <h3>Login with</h3>
            <Button className="mb-2 w-4" variant="outline-primary"><FaGoogle></FaGoogle> Login With Google</Button>
            <Button className="" variant="outline-secondary"> <FaGithub />Login with Github</Button>
            <div>
                <h4>Find us on</h4>
                <ListGroup>
                    <ListGroup.Item><FaFacebook></FaFacebook>facebook</ListGroup.Item>
                    <ListGroup.Item><FaTwitter></FaTwitter>twitter</ListGroup.Item>
                    <ListGroup.Item><FaYoutube></FaYoutube>Youtube</ListGroup.Item>
                </ListGroup>
            </div>
            <div>
                <QZone></QZone>
            </div>
        </div>
    );
};

export default RightNav;
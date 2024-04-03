import { Col, Container, Row } from "react-bootstrap";
import Footer from "../pages/Home/Shared/Footer/Footer";
import Header from "../pages/Home/Shared/Header/Header";
import LeftNav from "../pages/Home/Shared/LeftNav/LeftNav";
import RightNav from "../pages/Home/Shared/RightNav/RightNav";


const Main = () => {
    return (
        <div>
            <Header></Header>
            <Container>
                <Row>
                    <Col lg={3}>
                        <LeftNav></LeftNav>
                    </Col>
                    <Col lg={6}>Main Contents is COmming</Col>
                    <Col lg={3}>
                        <RightNav></RightNav>
                    </Col>
                </Row>
            </Container>
            <Footer></Footer>
        </div>
    );
};

export default Main;
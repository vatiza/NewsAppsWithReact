import React from 'react';
import Card from 'react-bootstrap/Card';
import Col from 'react-bootstrap/Col';
import Row from 'react-bootstrap/Row';
import img1 from '../../../assets/1.png';
import img2 from '../../../assets/2.png';
import img3 from '../../../assets/3.png';

const EditorNews = () => {
    return (
        <div className='mt-4'>
            <Row xs={1} md={2} lg={3} m-4 className="g-4">
        
        <Col >
          <Card>
            <Card.Img variant="top" src={img1} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
                
          
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={img2} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
        <Col >
          <Card>
            <Card.Img variant="top" src={img3} />
            <Card.Body>
              <Card.Title>Card title</Card.Title>
              <Card.Text>
                This is a longer card with supporting text below as a natural
                lead-in to additional content. This content is a little bit
                longer.
              </Card.Text>
            </Card.Body>
          </Card>
        </Col>
    </Row>
        </div>
    );
};

export default EditorNews;
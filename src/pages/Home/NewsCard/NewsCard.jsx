import React from 'react';
import {Card, Image} from "react-bootstrap";
import {Link} from "react-router-dom";
import moment from "moment";
import {FaRegBookmark, FaShareAlt} from "react-icons/fa";

const NewsCard = ({news}) => {
    const {title, _id, details, image_url, author, total_view, rating} = news;
    return (
        <Card className=" mb-4">
            <Card.Header className='d-flex align-items-center'>
                <Image style={{height: '40px'}} src={author?.img} roundedCircle/>
                <div className='ps-2 flex-grow-1 '>
                    <p className='mb-0'>{author?.name}</p>
                    <p><small>{moment(author?.published_date).format('yyy-MM-D')}</small></p>
                </div>
                <div>
                    <FaRegBookmark/>
                    <FaShareAlt></FaShareAlt>
                </div>

            </Card.Header>
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Img variant={"top"} src={image_url}></Card.Img>
                <Card.Text>
                    {details.length < 250 ? <>{details}</> :
                        <>{details.slice(0, 250)}... <Link className='text-warning' to={`/news/${_id}`}>Read
                            More</Link></>
                    }
                </Card.Text>

            </Card.Body>
            <Card.Footer className="text-muted">2 days ago</Card.Footer>
        </Card>
    );
};

export default NewsCard;
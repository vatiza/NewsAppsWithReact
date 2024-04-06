import React, { useState } from 'react';
import {  Link, useLoaderData} from "react-router-dom";
import Card from 'react-bootstrap/Card';
import Button from 'react-bootstrap/Button';
import { FaArrowLeft } from 'react-icons/fa';
import EditorNews from './EditorInsight/EditorsInsight';

const News = () => {
    
    const news=useLoaderData();
    const { title, _id, details, image_url,category_id, author, total_view, rating } = news;
   
    
    return (
        <div>
        <Card >
            <Card.Img variant="top" src={image_url} />
            <Card.Body>
                <Card.Title>{title}</Card.Title>
                <Card.Text>
                   {details}
                </Card.Text>
               <Link to={ `/category/${category_id}`}><Button  variant="danger"><FaArrowLeft></FaArrowLeft> All News in this category</Button></Link>
            </Card.Body>
        </Card>
        <EditorNews></EditorNews>
        </div>
        
    );
};

export default News;
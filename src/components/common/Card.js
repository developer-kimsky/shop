import React from "react";
import { Col } from "react-bootstrap";

const Card = ({ shoes }) => {
  return (
    <Col key={shoes.id}>
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (shoes.id + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.content}</p>
      <p>{shoes.price}</p>
    </Col>
  );
};

export default Card;

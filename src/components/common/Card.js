import React from "react";
import { Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const Card = ({ shoes }) => {
  const navigate = useNavigate();

  return (
    <Col
      key={shoes.id}
      onClick={() => {
        navigate(`/detail/${shoes.id}`);
      }}
    >
      <img
        src={
          "https://codingapple1.github.io/shop/shoes" + (shoes.id + 1) + ".jpg"
        }
        width="80%"
      />
      <h4>{shoes.title}</h4>
      <p>{shoes.price}</p>
    </Col>
  );
};

export default Card;

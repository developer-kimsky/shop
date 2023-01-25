import React from "react";
import { Row, Col } from "react-bootstrap";
import { useNavigate } from "react-router-dom";

const ImageCard = ({ watchedId }) => {
  const navigate = useNavigate();
  return (
    <Row
      onClick={() => {
        navigate(`/detail/${watchedId}`);
      }}
    >
      <Col>
        <img
          src={`https://codingapple1.github.io/shop/shoes${
            Number(watchedId) + 1
          }.jpg`}
          alt=""
        />
      </Col>
    </Row>
  );
};

export default ImageCard;

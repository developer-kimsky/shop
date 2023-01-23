import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

const Detail = ({ shoes }) => {
  const { id } = useParams();
  let product = shoes.find((x) => x.id == id);

  useEffect(() => {
    // let a = setTimeout(() => {
    //   document.querySelector(".test").style.display = "none";
    // }, 2000);

    return () => {};
  }, []);

  return (
    <div className="container">
      {/* <div className="test">여기라능</div> */}
      <div className="row">
        <div className="col-md-6">
          <img
            src={
              "https://codingapple1.github.io/shop/shoes" +
              (product.id + 1) +
              ".jpg"
            }
            width="100%"
          />
        </div>
        <div className="col-md-6">
          <h4 className="pt-5">{product.title}</h4>
          <p>{product.content}</p>
          <p>{product.price}원</p>
          <button className="btn btn-danger">주문하기</button>
        </div>
      </div>
    </div>
  );
};

export default Detail;

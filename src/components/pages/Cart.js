import React from "react";
import { Table } from "react-bootstrap";
import { useDispatch, useSelector } from "react-redux";
import { addCount } from "../../store/cartSlice";
import { changeAge, changeName } from "../../store/userSlice";

const Cart = (props) => {
  let state = useSelector((state) => state.cart);
  let state2 = useSelector((state) => state.user);
  let dispatch = useDispatch(); // store.js 로 요청 보내주는 함수

  return (
    <div>
      {state2.name}({state2.age}) 의 장바구니
      <button
        onClick={() => {
          dispatch(changeAge(10));
        }}
      >
        버튼
      </button>
      <Table>
        <thead>
          <tr>
            <th>#</th>
            <th>상품명</th>
            <th>수량</th>
            <th>변경하기</th>
          </tr>
        </thead>
        <tbody>
          {state.map((item, index) => {
            return (
              <tr key={index}>
                <td>{item.id}</td>
                <td>{item.name}</td>
                <td>{item.count}</td>
                <td>
                  <button
                    onClick={() => {
                      dispatch(addCount(item.id));
                    }}
                  >
                    +
                  </button>
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </div>
  );
};

export default Cart;

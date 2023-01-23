import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Card from "./components/common/Card";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./components/pages/detail";
import About from "./components/pages/about";
import Event from "./components/pages/event";
import axios from "axios";

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);
  let [loading, setLoading] = useState(false);

  const navigate = useNavigate();

  return (
    <div className="App">
      <Navbar bg="dark" variant="dark">
        <Container>
          <Navbar.Brand
            onClick={() => {
              navigate("/");
            }}
          >
            Monkey Market
          </Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => {
                navigate("/");
              }}
            >
              Home
            </Nav.Link>
            <Nav.Link
              onClick={() => {
                navigate("/about");
              }}
            >
              About
            </Nav.Link>
          </Nav>
        </Container>
      </Navbar>

      <Routes>
        <Route
          path="/"
          element={
            <>
              <div className="main-bg"></div>
              <Container>
                <Row>
                  {shoes.map((item) => {
                    return <Card key={item.id} shoes={item} />;
                  })}
                </Row>
              </Container>
              {loading && <div>로딩중입니다.</div>}
              {count < 4 && (
                <button
                  onClick={() => {
                    if (count < 4) {
                      setLoading(true);
                      axios
                        .get(
                          `https://codingapple1.github.io/shop/data${count}.json`
                        )
                        .then((result) => {
                          let copy = [...shoes, ...result.data];
                          setLoading(false);
                          setShoes(copy);
                          setCount((prevState) => prevState + 1);
                        })
                        .catch(() => {
                          setLoading(false);
                          console.log("실패했다능");
                        });
                    } else {
                      alert("상품이 없습니다.");
                    }
                  }}
                >
                  더보기
                </button>
              )}
            </>
          }
        />
        <Route path="/detail/:id" element={<Detail shoes={shoes} />} />

        <Route path="/about" element={<About />}>
          <Route path="member" element={<div>멤버정보</div>} />
          <Route path="location" element={<div>위치정보</div>} />
        </Route>

        <Route path="/event" element={<Event />}>
          <Route path="one" element={<div>첫 주문시 양배추즙 서비스</div>} />
          <Route path="two" element={<div>생일기념 쿠폰받기</div>} />
        </Route>

        <Route path="/*" element={<div>잘못된 페이지 입니다!</div>} />
      </Routes>
    </div>
  );
}

export default App;

import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { lazy, Suspense, useEffect, useState } from "react";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import data from "./data";

// import Detail from "./components/pages/Detail";
// import About from "./components/pages/About";
// import Event from "./components/pages/Event";
// import Cart from "./components/pages/Cart";

import ImageCard from "./components/common/ImageCard";
import Card from "./components/common/Card";

const Detail = lazy(() => import("./components/pages/Detail"));
const About = lazy(() => import("./components/pages/About"));
const Event = lazy(() => import("./components/pages/Event"));
const Cart = lazy(() => import("./components/pages/Cart"));

function App() {
  let [shoes, setShoes] = useState(data);
  let [count, setCount] = useState(2);
  let [loading, setLoading] = useState(false);
  let [watched, setWatched] = useState([]);

  const navigate = useNavigate();

  useEffect(() => {
    if (!localStorage.getItem("watched")) {
      localStorage.setItem("watched", JSON.stringify([]));
    } else {
      setWatched(JSON.parse(localStorage.getItem("watched")));
    }
  }, []);

  let result = useQuery(["작명"], () =>
    axios.get("https://codingapple1.github.io/userdata.json").then((a) => {
      return a.data;
    })
  );

  return (
    <div className="App">
      <Navbar bg="light" variant="light">
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
            <Nav.Link
              onClick={() => {
                navigate("/cart");
              }}
            >
              Cart
            </Nav.Link>
          </Nav>
          <Nav className="ms-auto">
            {result.isLoading ? "로딩중" : "반가워요 " + result.data.name}
          </Nav>
        </Container>
      </Navbar>
      <Suspense fallback={<div>로딩중입니다.</div>}>
        <Routes>
          <Route
            path="/"
            element={
              <>
                <div className="main-bg">
                  {watched.length > 0 && (
                    <Container>
                      <Row>
                        <Col>Recently Viewed</Col>
                      </Row>
                      {watched
                        .slice(-3)
                        .reverse()
                        .map((item, index) => {
                          return <ImageCard key={index} watchedId={item} />;
                        })}
                    </Container>
                  )}
                </div>
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

          <Route path="/cart" element={<Cart />} />

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
      </Suspense>
    </div>
  );
}

export default App;

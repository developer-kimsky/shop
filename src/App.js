import "./App.css";
import { Navbar, Container, Nav, Row, Col } from "react-bootstrap";
import { useState } from "react";
import data from "./data";
import Card from "./components/common/Card";
import { Routes, Route, Link, useNavigate, Outlet } from "react-router-dom";
import Detail from "./components/pages/detail";
import About from "./components/pages/about";
import Event from "./components/pages/event";

function App() {
  let [shoes] = useState(data);
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
                    return <Card shoes={item} />;
                  })}
                </Row>
              </Container>
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

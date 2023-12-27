import React from "react";
import { Container, Row, Col, Button } from "react-bootstrap";
import NavBar from "./components/Navbar";
import MainLayout from "./components/MainLayout";
import Footer from "./components/Footer";
const Home = () => {
  return (
    <div className="custom-scrollbar">
      <Row>
        <Col>
          <NavBar />
          <MainLayout />
          <Footer />
        </Col>
      </Row>
    </div>
  );
};

export default Home;

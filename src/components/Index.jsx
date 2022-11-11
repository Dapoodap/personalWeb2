import React from "react";
import { Col, Container, Row } from "react-bootstrap";
import gambar from "../assets/foto.png"

function Index() {
  return (
    <div className="header">
      <Container>
      <Row style={{justifyContent:'center'}} >
        <Col lg={1}></Col>
        <Col  className="title" lg={5} md={12} sm={12}><h1>Hello, i'm Daffa</h1><h1>I'm a passionate <span className="title" style={{color:'brown',textDecoration:'underline'}}>Frontend Developer</span></h1></Col>
        <Col lg={5}  md={6} style={{zIndex:'1'}}><img className="gbrSaya"  src={gambar} width={500} /> </Col>
        <Col lg={1}></Col>
      </Row>
      </Container>
    </div>
  );
}

export default Index;

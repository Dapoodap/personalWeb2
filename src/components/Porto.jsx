import React from 'react'
import wrc from '../assets/wrc.jpg'
import palind from '../assets/palindrom.jpg'
import hompe from '../assets/homep.jpg'
import calc from '../assets/calc.jpg'
import movie from '../assets/skillmov.png'
import gre from '../assets/gre.png'
import {Col, Container, Row} from 'react-bootstrap'

function Porto() {
  return (
   <div>
    <Container style={{marginTop:'100px'}}className='contain'>
    <Row className='rownya'>
      <Col lg={4} md={12} className='mb-4 mb-lg-0 colnya'>
        <a href="https://github.com/Dapoodap/WRC_Landing_Page" target={"blank"}>
        <img
          src={wrc}
          className='w-100 shadow-1-strong rounded mb-4' imgur
          alt='wrc landing page'
        />
        </a>

        <a href="https://skilmovie-app.netlify.app/#" target={"blank"}><img
          src={movie}
          className='w-100 shadow-1-strong rounded mb-4' imgur
          alt='skillmovie apps'
        /></a>
      </Col>

      <Col lg={4} className='mb-4 mb-lg-0 colnya' >
        <a href="https://bmicalculatorku.netlify.app/" target={"blank"}>
        <img
          src={calc}
          className='w-100 shadow-1-strong rounded mb-4'imgur
          alt='calculator'
        />
        </a>

        <img
          src={hompe}
          className='w-100 shadow-1-strong rounded mb-4'imgur
          alt='Boat on Calm Water'
        />
      </Col>

      <Col lg={4} className='mb-4 mb-lg-0 colnya' >
       <a href="https://greenish-event-organization.netlify.app/index.html" target={"blank"}>
       <img
          src={gre}
          className='w-100 shadow-1-strong rounded mb-4'imgur
          alt='Waves at Sea'
        />
       </a>

       <a href="https://palindromgene.netlify.app/" target={"blank"}>
       <img
          src={palind}
          className='w-100 shadow-1-strong rounded mb-4'imgur
          alt='Yosemite National Park'
        />
       </a>
      </Col>
    </Row>
    </Container>
   </div>
  )
}

export default Porto
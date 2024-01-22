import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import heroImg from '../../assests/hero-img1.png'
import './HeroSection.css'

const HeroSection = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="hero__content">
              <h2 className="mb-4 hero__title">
                Anytime Anywhere <br /> Learn on your <br /> Suitable Schedule
              </h2>
              <p className="mb-5">
              "At EduEquity, we believe in unlocking the doors to <br/> a brighter future through education that transcends boundaries <br/> and fosters equity."
              </p>
            </div>
            <div className="search">
              <input type="text" placeholder="Search" />
              <button className="btn">Search</button>
            </div>
          </Col>

          <Col lg="6" md="6">
            <img src={heroImg} alt="" className="w-100 hero__img" />
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default HeroSection

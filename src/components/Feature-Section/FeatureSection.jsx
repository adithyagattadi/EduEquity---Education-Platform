import React from 'react'
import { Container, Row, Col } from "reactstrap";
import "./FeatureSection.css";

const FeatureData = [
    {
      title: "Quick Learning",
      desc: "Quick learning at EduEquity is an immersive and dynamic experience designed to accelerate your knowledge acquisition!",
      icon: "ri-draft-line",
    },
  
    {
      title: "All Time Support",
      desc: "At EduEquity, we prioritize your success with our unwavering commitment to all-time support, ensuring that assistance and guidance are just a message or call away, around the clock!",
      icon: "ri-discuss-line",
    },
  
    {
      title: "Certification",
      desc: "Earn a certification from EduEquity and validate your expertise, gaining a recognized credential that opens doors to new opportunities in your chosen field!",
      icon: "ri-contacts-book-line",
    },
  ];

const FeatureSection = () => {
  return (
    <section>
      <Container>
        <Row>
          {FeatureData.map((item, index) => (
            <Col lg="4" md="6" key={index}>
              <div className="single__feature text-center px-4">
                <h2 className="mb-3">
                  <i class={item.icon}></i>
                </h2>
                <h6>{item.title}</h6>
                <p>{item.desc}</p>
              </div>
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default FeatureSection

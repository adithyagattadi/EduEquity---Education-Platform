import React, { useState } from 'react'
import { Container, Row, Col } from "reactstrap";

import chooseImg from "../../assests/vit.jpg";
import "./ChooseUs.css";

import ReactPlayer from "react-player";

const ChooseUs = () => {
    const [showVideo, setShowVideo] = useState(false);
  return (
    <section>
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="choose__content">
              <h2>Why Choose Us</h2>
              <p>
              "EduEquity, a beacon of academic excellence and personal growth, stands as a testament to our commitment to providing a transformative educational experience. As you embark on your academic journey, choosing EduEquity means choosing a holistic learning approach that extends beyond the confines of traditional education. We believe in shaping well-rounded individuals who not only excel academically but also develop essential life skills, critical thinking, and a global perspective.

At the heart of EduEquity is our exceptional faculty—a team of accomplished educators and mentors dedicated to guiding you through every step of your educational voyage. Beyond imparting knowledge, our faculty members inspire, challenge, and encourage, fostering an environment where intellectual curiosity thrives.


              </p>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="choose__img">
              {showVideo ? (
                <ReactPlayer
                  url="https://www.youtube.com/watch?v=pgsKTg0rrEc&t=376s"
                  controls
                  width="100%"
                  height="350px"
                />
              ) : (
                <img src={chooseImg} alt="" className="w-100" />
              )}

              {!showVideo && (
                <span className="play__icon">
                  <i
                    class="ri-play-circle-line"
                    onClick={() => setShowVideo(!showVideo)}
                  ></i>
                </span>
              )}
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  )
}

export default ChooseUs

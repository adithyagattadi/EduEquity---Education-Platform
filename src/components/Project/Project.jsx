import React from 'react'
import { Container, Row, Col } from 'reactstrap'
import ProjectCard from './ProjectCard'
import './Project.css'
import courseImg1 from "../../assests/project1.webp";
import courseImg2 from "../../assests/project2.jpeg";
import courseImg3 from "../../assests/project3.jpeg";

const ProjectData = [
    {
      id: "01",
      title: "Designing a sensors using IoT",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "Elctric using AI",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "Mechanical Engineering AI",
      lesson: 12,
      students: 12.5,
      rating: 5.9,
      imgUrl: courseImg3,
    },
  ];

const Project = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="course__top d-flex justify-content-between align-items-center">
              <div className="course__top__left w-50">
                <h2>Our Popular Projects</h2>
                <p>
                "Engage in hands-on projects at EduEquity, where learning transcends theory, providing you with practical experience to hone your skills and apply classroom knowledge to real-world scenarios, ensuring a comprehensive and impactful educational journey."
                </p>
              </div>

              <div className="button w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {ProjectData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <ProjectCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Project

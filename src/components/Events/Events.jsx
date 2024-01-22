import React from 'react'
import './Events.css'
import { Container, Row, Col } from 'reactstrap'
import EventsCard from './EventsCard';
import courseImg1 from "../../assests/event1.webp";
import courseImg2 from "../../assests/event2.webp";
import courseImg3 from "../../assests/event3.jpeg";

const EventData = [
    {
      id: "01",
      title: "Jhansaar 2015, Fest Event",
      lesson: 5,
      students: 12.5,
      rating: 9.5,
      imgUrl: courseImg1,
    },
  
    {
      id: "02",
      title: "Gen AI Hakcthon, Tech Event",
      lesson: 3,
      students: 2.5,
      rating: 9.0,
      imgUrl: courseImg2,
    },
  
    {
      id: "03",
      title: "Cultural Event, 2023",
      lesson: 6,
      students: 15.0,
      rating: 9.8,
      imgUrl: courseImg3,
    },
  ];

const Events = () => {
  return (
    <section>
      <Container>
        <Row>
          <Col lg="12" className="mb-5">
            <div className="event__top d-flex justify-content-between align-items-center">
              <div className="event__top__left w-50">
                <h2>Events</h2>
                <p>
                "At EduEquity, we believe in creating vibrant learning experiences, and our diverse range of events offers students unique opportunities for personal and professional growth, fostering a dynamic and engaging community within our academic environment."
                </p>
              </div>

              <div className="button w-50 text-end">
                <button className="btn">See All</button>
              </div>
            </div>
          </Col>
          {EventData.map((item) => (
            <Col lg="4" md="6" sm="6">
              <EventsCard key={item.id} item={item} />
            </Col>
          ))}
        </Row>
      </Container>
    </section>
  )
}

export default Events

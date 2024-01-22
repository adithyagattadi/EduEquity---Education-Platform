import React from 'react'
import { Fragment } from 'react'
import Header from '../components/Header/Header'
import HeroSection from '../components/Hero-Section/HeroSection'
import Company from '../components/Company-Section/Company'
import AboutUs from '../components/About-Us/AboutUs'
import Project from '../components/Project/Project'
import Events from '../components/Events/Events'
import ChooseUs from '../components/Choose-Us/ChooseUs'
import FeatureSection from '../components/Feature-Section/FeatureSection'
import FreeCourse from '../components/Free-Course-Section/FreeCourse'
import Newsletter from '../components/NewsLetter/NewsLetter'
import Footer from '../components/Footer/Footer'
import Testimonial from '../components/Testimonial/Testimonial'

const Home = () => {
  return (
    <Fragment>
        <Header/>
        <HeroSection/>
        <Company/>
        <AboutUs/>
        <Events/>
        <Project/>
        <Testimonial/>
        <ChooseUs/>
        <FeatureSection/>
        <FreeCourse/>
        <Newsletter/>
        <Footer/>
    </Fragment>
  )
}

export default Home

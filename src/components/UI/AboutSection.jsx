import React from "react";
import { Container, Row, Col } from "reactstrap";
import "../../styles/about-section.css";
import aboutImg from "../../assets/all-images/cars-img/img26.png";

const AboutSection = ({ aboutClass }) => {
  return (
    <section
      className="about__section"
      style={
        aboutClass === "aboutPage"
          ? { marginTop: "0px" }
          : { marginTop: "280px" }
      }
    >
      <Container>
        <Row>
          <Col lg="6" md="6">
            <div className="about__section-content">
              <h4 className="section__subtitle">About Us</h4>
              <h2 className="section__title">Welcome to  Wheel Bro</h2>
              <p className="section__description">
              Welcome to Wheel Bro, your premier destination for seamless vehicle service management. At Wheel Bro, we are dedicated to revolutionizing the way you book and manage your vehicle services. Our platform connects you effortlessly with top-rated service centers, allowing you to schedule appointments, track service progress, and receive timely updates, all from the comfort of your home. For service center employees, we provide intuitive tools to streamline service management and enhance customer satisfaction. Driven by innovation and a passion for excellence, Wheel Bro is committed to delivering unparalleled convenience and efficiency. Whether you're a vehicle owner or a service professional, we are here to make your experience smoother and more enjoyable
              </p>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> You can book your schedule
                  
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> At any time you can book your schedule
                  
                </p>
              </div>

              <div className="about__section-item d-flex align-items-center">
                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> By just a few clicks you can finish your work
                </p>

                <p className="section__description d-flex align-items-center gap-2">
                  <i class="ri-checkbox-circle-line"></i> Best Service Best work anywhere anytime
                </p>
              </div>
            </div>
          </Col>

          <Col lg="6" md="6">
            <div className="about__img">
              <img src={aboutImg} alt="" className="w-100" />
            </div>
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default AboutSection;

import React, { useEffect, useState } from "react";
import { Container, Row, Col, Form, FormGroup, Input } from "reactstrap";
import { useParams } from "react-router-dom";
import blogData from "../assets/data/blogData.js";
import Helmet from "../components/Helmet/Helmet";
import { Link } from "react-router-dom";
import commentImg from "../assets/all-images/ava-1.jpg";
import "../styles/blog-details.css";
import axios from "axios"; // Import axios to make HTTP requests

const BlogDetails = () => {
  const { slug } = useParams();
  const blog = blogData.find((blog) => blog.title === slug);

  // State for new comment
  const [newComment, setNewComment] = useState({
    fullName: "",
    email: "",
    message: "",
  });

  // Handle input changes
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setNewComment({
      ...newComment,
      [name]: value,
    });
  };

  // Handle form submission
  const handleSubmitComment = (e) => {
    e.preventDefault();

    const commentData = {
      fullName: newComment.fullName,
      email: newComment.email,
      message: newComment.message,
    };

    // Send comment to backend
    axios
      .post("http://localhost:8080/api/comments/add", commentData)
      .then((response) => {
        alert("Comment posted successfully!");
        setNewComment({
          fullName: "",
          email: "",
          message: "",
        }); // Reset the form
      })
      .catch((error) => {
        console.error("There was an error posting the comment!", error);
      });
  };

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [blog]);

  return (
    <Helmet title={blog.title}>
      <section>
        <Container>
          <Row>
            <Col lg="8" md="8">
              <div className="blog__details">
                <img src={blog.imgUrl} alt="" className="w-100" />
                <h2 className="section__title mt-4">{blog.title}</h2>

                <div className="blog__publisher d-flex align-items-center gap-4 mb-4">
                  <span className="blog__author">
                    <i className="ri-user-line"></i> {blog.author}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-calendar-line"></i> {blog.date}
                  </span>

                  <span className=" d-flex align-items-center gap-1 section__description">
                    <i className="ri-time-line"></i> {blog.time}
                  </span>
                </div>

                <p className="section__description">{blog.description}</p>
                <h6 className="ps-5 fw-normal">
                  <blockquote className="fs-4">{blog.quote}</blockquote>
                </h6>
                <p className="section__description">{blog.description}</p>
              </div>

              <div className="comment__list mt-5">
                <h4 className="mb-5">3 Comments</h4>

                <div className="single__comment d-flex gap-3">
                  <img src={commentImg} alt="" />
                  <div className="comment__content">
                    <h6 className="fw-bold">David Visa</h6>
                    <p className="section__description mb-0">14 July, 2022</p>
                    <p className="section__description">
                      At Wheel Bro, we make car care a breeze with just a few clicks! Whether you need a thorough water wash to keep your vehicle shining or a comprehensive oil service to ensure peak performance, our platform lets you book your favorite service center effortlessly. Enjoy the convenience of scheduling appointments online and leave the rest to us—your car will thank you!
                    </p>

                    <span className="replay d-flex align-items-center gap-1">
                      <i className="ri-reply-line"></i> Replay
                    </span>
                  </div>
                </div>

                {/* =============== comment form ============ */}
                <div className="leave__comment-form mt-5">
                  <h4>Leave a Comment</h4>

                  <Form onSubmit={handleSubmitComment}>
                    <FormGroup className="d-flex gap-3">
                      <Input
                        type="text"
                        placeholder="Full name"
                        name="fullName"
                        value={newComment.fullName}
                        onChange={handleInputChange}
                      />
                      <Input
                        type="email"
                        placeholder="Email"
                        name="email"
                        value={newComment.email}
                        onChange={handleInputChange}
                      />
                    </FormGroup>

                    <FormGroup>
                      <textarea
                        rows="5"
                        className="w-100 py-2 px-3"
                        placeholder="Comment..."
                        name="message"
                        value={newComment.message}
                        onChange={handleInputChange}
                      ></textarea>
                    </FormGroup>

                    <button className="btn comment__btn mt-3" type="submit">
                      Post a Comment
                    </button>
                  </Form>
                </div>
              </div>
            </Col>

            <Col lg="4" md="4">
              <div className="recent__post mb-4">
                <h5 className="fw-bold">Recent Posts</h5>
              </div>
              {blogData.map((item) => (
                <div className="recent__blog-post mb-4" key={item.id}>
                  <div className="recent__blog-item d-flex gap-3">
                    <img src={item.imgUrl} alt="" className="w-25 rounded-2" />
                    <h6>
                      <Link to={`/blogs/${item.title}`}>{item.title}</Link>
                    </h6>
                  </div>
                </div>
              ))}
            </Col>
          </Row>
        </Container>
      </section>
    </Helmet>
  );
};

export default BlogDetails;

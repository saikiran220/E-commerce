import React from 'react';
import HeaderNav from '../components/HeaderNav';
import BreadCrumb from '../components/BreadCrumb';
import { Row, Col, Button, Container, Form as BootstrapForm } from 'react-bootstrap';
import { Formik, Form, Field } from 'formik';
import * as Yup from 'yup';


const Contact = () => {
  const banner = 'assets/shop_banner_character1.png';

  const initialValues = {
    name: "",
    email: "",
    subject: "",
    message: "",
    username: "",
    password: ""
  };

  const validationSchema = Yup.object().shape({
    name: Yup.string().required("Name is required"),
    email: Yup.string().email("Invalid email").required("Email is required"),
    subject: Yup.string().required("Subject is required"),
    message: Yup.string().required("Message is required"),
    username: Yup.string().required("Username is required"),
    password: Yup.string().required("Password is required")
  });

  const handleSubmit = (values, { setSubmitting }) => {
    console.log(values);
    setSubmitting(false);
  };

  return (
    <div className="contact-page">
      <HeaderNav />
      <BreadCrumb pageTitle={'Contact'} bannerImg={banner} />
      
      <Container className="contact-container" >
        <Row className="contact-content justify-content-center" >
          {/* Contact Information Column */}
          <Col md={6} className="contact-info-col" >
            <div className="contact-info-section" style={{marginTop:"380px"}}>
              <h3 className="section-title" style={{marginBottom:"20px"}}>Contact Information</h3>
              <div className="contact-details">
                <p><strong>Customer Support:</strong> support@shopwise.com</p>
                <p><strong>Phone:</strong> +1 (800) 123-4567</p>
                <p><strong>Business Hours:</strong> Mon – Sat: 9:00 AM – 6:00 PM</p>
                <p><strong>Address:</strong> 123 Market Street, Shopping City, USA</p>
              </div>
            </div>
          </Col>

          {/* Contact Form Column */}
          <Col md={6} className="contact-form-col" style={{marginTop:"380px"}}>
            <div className="form-wrapper">
              <h3 className="section-title" style={{textAlign:"center", marginBottom:"10px"}}> Send Us a Message</h3>
              
              <Formik
                initialValues={initialValues}
                validationSchema={validationSchema}
                onSubmit={handleSubmit}
              >
                {({ touched, errors, isSubmitting }) => (
                  <Form>
                    {/* Contact Form Fields */}
                    <BootstrapForm.Group controlId="formName" className="form-group">
                      <BootstrapForm.Label>Name</BootstrapForm.Label>
                      <Field 
                        name="name" 
                        type="text" 
                        className={`form-control ${touched.name && errors.name ? 'is-invalid' : ''}`}
                      />
                      {touched.name && errors.name && (
                        <div className="invalid-feedback">{errors.name}</div>
                      )}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="formEmail" className="form-group">
                      <BootstrapForm.Label>Email</BootstrapForm.Label>
                      <Field 
                        name="email" 
                        type="email" 
                        className={`form-control ${touched.email && errors.email ? 'is-invalid' : ''}`}
                      />
                      {touched.email && errors.email && (
                        <div className="invalid-feedback">{errors.email}</div>
                      )}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="formSubject" className="form-group">
                      <BootstrapForm.Label>Subject</BootstrapForm.Label>
                      <Field 
                        name="subject" 
                        type="text" 
                        className={`form-control ${touched.subject && errors.subject ? 'is-invalid' : ''}`}
                      />
                      {touched.subject && errors.subject && (
                        <div className="invalid-feedback">{errors.subject}</div>
                      )}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="formMessage" className="form-group">
                      <BootstrapForm.Label>Message</BootstrapForm.Label>
                      <Field 
                        name="message" 
                        as="textarea" 
                        rows={4} 
                        className={`form-control ${touched.message && errors.message ? 'is-invalid' : ''}`}
                      />
                      {touched.message && errors.message && (
                        <div className="invalid-feedback">{errors.message}</div>
                      )}
                    </BootstrapForm.Group>

                    {/* Login Form Fields (if needed) */}
                    <BootstrapForm.Group controlId="formUsername" className="form-group">
                      <BootstrapForm.Label>Username</BootstrapForm.Label>
                      <Field 
                        name="username" 
                        type="text" 
                        className={`form-control ${touched.username && errors.username ? 'is-invalid' : ''}`}
                      />
                      {touched.username && errors.username && (
                        <div className="invalid-feedback">{errors.username}</div>
                      )}
                    </BootstrapForm.Group>

                    <BootstrapForm.Group controlId="formPassword" className="form-group">
                      <BootstrapForm.Label>Password</BootstrapForm.Label>
                      <Field 
                        name="password" 
                        type="password" 
                        className={`form-control ${touched.password && errors.password ? 'is-invalid' : ''}`}
                      />
                      {touched.password && errors.password && (
                        <div className="invalid-feedback">{errors.password}</div>
                      )}
                    </BootstrapForm.Group>

                    <div className="text-center mt-4">
                      <Button 
                        type="submit" 
                        className="submit-btn"
                        disabled={isSubmitting}
                      
                      >
                        {isSubmitting ? 'Sending...' : 'Send Message'}
                      </Button>
                    </div>
                  </Form>
                )}
              </Formik>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Contact;
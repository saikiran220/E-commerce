import React from 'react'

import { Formik, Form, Field } from 'formik';
import { Button, Form as BootstrapForm, Col, Row, Container } from 'react-bootstrap'
import * as Yup from 'yup';

import { useAuth } from './AuthContext';
import { useNavigate } from 'react-router-dom';

const Loginpage = () => {

  const navigate = useNavigate()
  const { login } = useAuth()

  const intialvalues = {
    username: "",
    password: ""
  }


  const validationSchema = Yup.object().shape({
    username: Yup.string().required("Username  is required"),
    password: Yup.string().required("password is required")
  })

  const onSubmit = async (values) => {
    console.log("form values", values)
    try {
      await login(values);
      navigate('/')

    } catch (error) {

    }
  }

  return (

    <>
     <div className='container loginContainer normal-login'>
                <Row>
                  <div className='col-md-12 text-center'>
                    <img src={"logo1.png"} style={{ height: "90px" }} />
                  </div>
                </Row>
                <Row>
            <div className='col-md-12'>
              <p>Login in using your Email or phoneNumber </p>
            </div>
          </Row>
          <Formik initialValues={intialvalues} validationSchema={validationSchema} onSubmit={onSubmit}>
                {({ touched, errors, isSubmitting }) => (
                  <Form>
                    <Row>
                      <Col md={4}>
                        <BootstrapForm.Group controlId='user_name'>
                          <BootstrapForm.Label>User Name</BootstrapForm.Label>
                          <Field type='text' name='username' id='inputformControl' className={touched.username && errors.username ? "form-control is-invalid " : "form-control"} />
                          {touched.username && errors.username && (<div className='text-danger'>{errors.username}</div>)}
                        </BootstrapForm.Group>
                      </Col>
                    </Row>
                    <Row>
                      <Col md={4}>
                        <BootstrapForm.Group controlId='password'>
                          <BootstrapForm.Label>Password</BootstrapForm.Label>
                          <Field type="password" name="password" id='inputformControl' className={errors.password && touched.password ? '  form-control is-invalid' : 'form-control'} />
                          {touched.password && errors.password && (<div className='text-danger'>{errors.password}</div>)}
                        </BootstrapForm.Group>
                      </Col>
                    </Row>
                    <div className='col-md-12 text-center'>
                      <Button type='submit' className='Submitbutton' disabled={isSubmitting}>Submit</Button>
                    </div>
  
                  </Form>
                )}
                
              </Formik>
      </div>
    </>
  )
}

export default Loginpage

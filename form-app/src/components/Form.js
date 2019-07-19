import React from 'react';
import axios from 'axios';
import { Formik, Field, Form } from 'formik';
import * as Yup from 'yup';

const Register = props => {
  return (
    <Formik
      initialValues={{
        username: '',
        password: '',
      }}
      onSubmit={(values, actions) => {
        console.log(values);
        actions.setSubmitting(true);
        axios
          .post('http://localhost:5000/api/register', values)
          .then(res => {
            localStorage.setItem('token', res.data.token);
            console.log(props);
          })
          .then(() => props.history.push('restricted/data'))
          .catch(err => console.log(err));
      }}
      validationSchema={() =>
        Yup.object().shape({
          username: Yup.string()
            .max(15, 'Name cant be more than 15 characters')
            .required('A name is required'),

          password: Yup.string()
            .min(8, 'Your password must have a minimum of 8 characters.')
            .required('Password is required'),
        })
      }
      render={props => (
        <Form
          style={{
            display: 'flex',
            flexDirection: 'column',
            alignItems: 'center',
          }}
          onSubmit={props.handleSubmit}
        >
          <div>
            {props.touched.username && props.errors.username && (
              <p>{props.errors.username}</p>
            )}

            <Field
              placeholder='Username'
              label='username'
              name='username'
              id='username'
              type='text'
              onChange={props.handleChange}
              width='4'
            />
          </div>

          <div>
            {props.touched.password && props.errors.password && (
              <p>{props.errors.password}</p>
            )}
            <Field
              placeholder='Password'
              label='password'
              name='password'
              id='password'
              type='text'
              onChange={props.handleChange}
              width='4'
            />
          </div>

          <button type='submit'>Register</button>
        </Form>
      )}
    />
  );
};

export default Register;

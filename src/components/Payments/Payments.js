import React from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Payments.css'
import axios from 'axios'

const Basic = ({path}) => (
  <div>
    <Formik
      initialValues={{ name: '', email: '', amount: '' }}
      validate={values => {
        const errors = {};
        if (!values.email) {
          errors.email = 'Required';
        } else if (
          !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)
        ) {
          errors.email = 'Invalid email address';
        }
        return errors;
      }}
      onSubmit={(values, { setSubmitting }) => {
        setTimeout(() => {
            const data = values
            console.log(`${process.env.PORT}`)
            axios.post(` ${process.env.PORT}/api/${path}`, data)
            .then((res)=>{
                const urlPayment = res.data.init_point
                window.open(urlPayment)
            })
          setSubmitting(false);
        }, 400);
      }}
    >
      {({
        values,
        errors,
        touched,
        handleChange,
        handleBlur,
        handleSubmit,
        isSubmitting,
        /* and other goodies */
      }) => (
        <form className='form' onSubmit={handleSubmit}>
            <h4>Nombre</h4>
          <input
            type="text"
            name="name"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.name}
            
          />  
          {errors.name && touched.name && errors.name}
          <h4>Correo electrónico</h4>
          <input
            type="email"
            name="email"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.email}
          />
          {errors.email && touched.email && errors.email}
          <h4>Monto con el que desea colaborar</h4>
          <input
            type="number"
            name="amount"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}
          />
          {errors.amount && touched.amount && errors.amount}
          <button className='btn btn-dark' type="submit" disabled={isSubmitting}>
            Enviar
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default function Payments ({type}) {
    return(
        <div className='payments-container'>
            <h2>Toda donacion o suscripcion es totalmente a voluntad. Desde ya te agradecemos por querer ser parte de este proyecto. En cuanto llenes los campos del formulario se te redijirá a un link de pago.</h2>
            <div className='payment-type'>
                {
                    type === 'payment' ?
                    <h2>Donacion de único pago</h2> :
                    type === 'subscription' ?
                    <h2>Suscripcion mensual</h2> : ''
                }
                <Basic path={type}/>
            </div>
        </div>
    )
}
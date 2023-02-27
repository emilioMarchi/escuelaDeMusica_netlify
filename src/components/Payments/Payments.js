import React, {useState} from 'react'
import { Formik, Form, Field, ErrorMessage } from 'formik';
import './Payments.css'
import axios from 'axios'

const Basic = ({path}) => (
  <div>
    <Formik
      initialValues={{ name: '', email: '', amount:500 }}
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
        
          console.log(path)
          setTimeout(() => {
              const data = values
              console.log(values)
              console.log(`${process.env.PORT}`)
              axios.post(`https://api.escuelademusicabarrial.ar/${path}`, data)
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
          <h4>Selecciones el monto con el que desea colaborar</h4>
          <select 
            type="number"
            name="amount"
            onChange={handleChange}
            onBlur={handleBlur}
            value={values.amount}

          >
            <option value={100}>$100</option>
            <option value={300}>$300</option>
            <option value={500}>$500</option>
            <option value={700}>$700</option>
            <option value={1000}>$1000</option>         
          </select>
          
          {errors.amount && touched.amount && errors.amount}
          <button className='btn btn-primary' type="submit" disabled={ !path ? true : isSubmitting}
            onClick={()=>{
              if(!path){
                alert('Seleccione el tipo de aporte')
              }
              else {} 
            }}
          >
            Ir a Mercado Pago
          </button>
        </form>
      )}
    </Formik>
  </div>
);

export default function Payments () {

  const [typeDonation, setTypeDonation] = useState()
    

    return(
        <div className='payments-container'>
            
            <h3>Completando el formulario debajo se te direccionara a Mercado Pago, donde encontrarás diferentes opciones de pago.</h3>
            <div className='type-buttons-container'>
              <div className='buttons'>
                <div className={ typeDonation === 'payment' ?'btn btn-dark selected' : 'btn btn-dark'}
                  onClick={()=>{ setTypeDonation('payment') }}
                >Aporte único</div>
                <div className={ typeDonation === 'subscription' ?'btn btn-dark selected' : 'btn btn-dark'}
                  onClick={()=>{ setTypeDonation('subscription') }}
                >Aporte mensual</div>
              </div>
              <h3>Para abonar por única vez, selecciona "Aporte único". Para abonar de forma mensual, selecciona "Aporte mensual"</h3>
            </div>
            
            <div className='payment-type'>
               
                <Basic path={typeDonation}/>
            </div>
        </div>
    )
}
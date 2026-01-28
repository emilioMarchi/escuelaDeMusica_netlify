import React, {useState, useEffect } from 'react';
import { useFormik, validateYupSchema } from 'formik';
import axios from 'axios'
import $ from 'jquery'
import {firebaseApp} from  '../../firebaseApp'
import { getFirestore, addDoc, collection } from 'firebase/firestore';

const FormContact = ({type}) => {
    
    const [formInfo, setFormInfo] = useState()
    const [formResponse, setFormResponse] = useState()
    const [formMsj, setFormMsj] = useState()


    useEffect(() => {
      handleMsj()

      
    }, [])
    
    const handleMsj = (msj) => {
      setFormMsj(msj)
      $('.form-msj').toggle()
      setTimeout(()=>{
        $('.form-msj').hide()
      }, 3500)
    }
    
    
    const formik = useFormik({
    initialValues: {
      userName: '',
      userEmail: '',
      userQuery: '',
      queryType: type,
    },
    onSubmit: async (values, {resetForm}) => {
      try{
        setFormInfo(values)
        console.log(values)
        if(values.userName !== '' && values.userEmail !== '' && values.userQuery !== '' && values.queryType !== '') {
          
          await fetch('/.netlify/functions/send-form', {
            method:'POST',
            body:JSON.stringify(values),
            headers: {
              'Content-Type': 'application/json',
            }
          })
          .then(async (res)=>{

            return  res.json()
            //
          }).then((res)=>{
            setFormResponse(res.status)
            setFormInfo(values)
            resetForm()
            setFormMsj(res.msg)
            handleMsj(res.msg) 
            
            console.log(res)  
          })
        }
        else{
          console.log('Error values')
          handleMsj('Hay campos sin rellenar')
        }
      } catch(err){
        console.log('error server connection',err)
      }
    }
  });

  return (
    <form onSubmit={formik.handleSubmit}> 
       <div className='form-msj'>
         <h3>{formMsj}</h3>
       </div> 
      <div className='form-level'>
        <label>Nombre</label>
        <input
          id="userName"
          name="userName"
          type="text"
          placeholder='Nombre'
          onChange={formik.handleChange}
          value={formik.values.userName}
          autofocus
          required
        />
      </div>
      <div className='form-level'>
      <label>Correo electrónico</label>
        <input
          id="userEmail"
          name="userEmail"
          type="email"
          placeholder='micorreo@email.com'
          onChange={formik.handleChange}
          value={formik.values.userEmail}
          required
        />
      </div>
      <div className='form-level'>
      <label>Mensaje</label>
        <textarea
          cols="20"
          rows="10"
          id="userQuery"
          name="userQuery"
          type="textarea"
          placeholder='Escribinos tu mensaje'
          onChange={formik.handleChange}
          value={formik.values.userQuery}
          required
        ></textarea>
      </div>
      <button className='form-button btn btn-dark' type="submit">Enviar</button>
    </form>
  );
};

export default FormContact
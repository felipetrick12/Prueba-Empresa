import React, { useState } from 'react'
import { useForm } from '../hooks/useForm';
import '../styles/form.css'
import Swal from 'sweetalert2';

export const Form = ({location}) => {

    const option= [];

    for (let index=18; index<=100; index++) {
        option.push(<option key={index} value={index}>{index}</option>)
      }

    const [value,handleChange,rest]=useForm({
        name:'',
        email:'',
        cel:'',
        edad:''
    })
    const [error, setError] = useState(false);

    const {name,email,cel,edad}=value;

    const handleSubmit=(e)=> {
        e.preventDefault();
        
        if(name.trim()==="" || email.trim()==="" || edad.trim()===""||cel.trim()===""){
            setError(true)
            return;
        }else{
            setError(false)
            
        }
        console.log(value);
        Swal.fire({
            title:'Datos Enviados',
            text:'Tu información fue enviada con éxito, estaremos en contacto contigo',
            timer:5000,
        },
        rest()
        )
    }

    return (
      
        <form onSubmit={handleSubmit}>
            {
                (location.pathname ==="/vivair")?
                 <h1>Bienvenido a Vivair </h1>
                :
                <h1>Bienvenido a Avianca </h1>
            }
            
            {
                error? <div className='alert alert-danger'>
                        Ingrese Todos los campos
                        </div>: null
            }
             
          <div className="form-group">
            <label >Nombre </label>
            <input
              type="text"
              className="form-control"
              name="name"
              placeholder="Ingrese Nombre"
              value={name}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label >Correo Electrónico</label>
            <input
              type="email"
              className="form-control"
              name="email"
              placeholder="luis@email.com"
              value={email}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Celular</label>
            <input
              type="tel"
              className="form-control"
              name="cel"
              placeholder="Telefono"
              value={cel}
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label>Edad</label>
            <select
                    className="form-control"
                    name="edad"
                    value={edad}
                    onChange={handleChange}
                >
                    <option value="">-- Seleccione --</option>
                    {option}
                    
                </select>
          </div>
         
          <button type="submit" className="btn btn-primary mb-2 btn-block">Continuar</button>
        </form>
         

    )
}

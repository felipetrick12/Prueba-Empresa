import  { useState } from 'react'

export const useForm = (initialState ={}) => {

    //el name es fundamental para que nuestro useForm funcione.el name que se ponga es elq ue se envia a esta funcion
    const [values,setValues] = useState(initialState);

    const reseTxt =()=>{
        setValues (initialState);
    }
    
    const handleInputChange = ({target}) =>{
        setValues( {
            ...values,
            [target.name]: target.value
        })
    }

    return [values,handleInputChange,reseTxt];
    
}

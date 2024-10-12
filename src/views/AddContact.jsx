import React, { useState, useContext } from 'react';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

export const AddContact = () => {
  const { store, actions } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');

  const handleSubmit = async () => {
    let contacto = {
      name: 'Pancho',
      phone: '912345678',
      email: 'pancho@capone.cl',
      address: 'Elm Street 13'
    };

    let response = await actions.createContact(contacto);

    if (response) {
      Swal.fire('Contacto agregado con éxito!');
      //Limpiar los estados
    } else {
      Swal.fire('Error al agregar contacto');
      //Mantener valores de los estados
    }
  }

  return (
    <>
      <div>Formulario con campos para agregar un nuevo contacto</div>
      <button className='btn btn-success' onClick={ () => { handleSubmit() }}>Agregar contacto</button>
      <Link to="/">
        <button className='btn btn-warning'>Volver</button>
      </Link>
    </>
  );
};
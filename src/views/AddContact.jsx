import React, { useState, useContext } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

export const AddContact = () => {
  const { actions } = useContext(Context);
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [phone, setPhone] = useState('');
  const [address, setAddress] = useState('');
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault(); // Evitar el comportamiento predeterminado del formulario

    let contacto = {
      name,
      phone,
      email,
      address
    };

    let response = await actions.createContact(contacto);

    if (response) {
      Swal.fire('Contacto agregado con éxito!', '', 'success');
      // Limpiar los campos del formulario
      setName('');
      setEmail('');
      setPhone('');
      setAddress('');
      navigate('/'); // Redirigir a la lista de contactos
    } else {
      Swal.fire('Error al agregar contacto', '', 'error');
    }
  };

  return (
    <div className='formulario1 col-7 pt-5'>
      <h1>Agregar Contacto</h1>
      <form className="row pt-3" onSubmit={handleSubmit}>
        <div className="col-md-6">
          <label htmlFor="nombre" className="form-label">Nombre</label>
          <input 
            type="text" 
            className="form-control" 
            id="nombre" 
            value={name} 
            onChange={(e) => setName(e.target.value)} 
            required
          />
        </div>
        <div className="col-md-6">
          <label htmlFor="telefono" className="form-label">Teléfono</label>
          <input 
            type="text" 
            className="form-control" 
            id="telefono" 
            value={phone} 
            onChange={(e) => setPhone(e.target.value)} 
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="email" className="form-label">Email</label>
          <input 
            type="email" 
            className="form-control" 
            id="email" 
            value={email} 
            onChange={(e) => setEmail(e.target.value)} 
            required
          />
        </div>
        <div className="col-12">
          <label htmlFor="inputAddress" className="form-label">Dirección</label>
          <input 
            type="text" 
            className="form-control" 
            id="inputAddress" 
            value={address} 
            onChange={(e) => setAddress(e.target.value)} 
            required
          />
        </div>
        <div className="col-12 pt-3">
          <button type="submit" className='btn btn-success'>Agregar contacto</button>
          <Link to="/">
            <button style={{ marginLeft: 5 }} type="button" className='btn btn-warning'>Volver</button>
          </Link>
        </div>
      </form>
    </div>
  );
};

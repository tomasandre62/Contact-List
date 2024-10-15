import React, { useState, useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

export const UpdateContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({
    name: '',
    address: '',
    email: '',
    phone: ''
  });
  const params = useParams();
  const navigate = useNavigate();

  // Función para buscar el contacto por ID y llenar el formulario
  const findContact = () => {
    const contactEdit = store.contactList.find((element) => element.id == params.id);
    if (contactEdit) {
      setContact(contactEdit); // Llenar el estado con los datos del contacto
    }
  };

  // Ejecutar la búsqueda del contacto cuando se monta el componente
  useEffect(() => {
    findContact();
  }, [store.contactList]);

  // Manejar cambios en los campos del formulario
  const handleChange = (e) => {
    setContact({
      ...contact,
      [e.target.name]: e.target.value // Actualiza el campo correspondiente
    });
  };

  // Manejar el envío del formulario
  const handleSubmit = async (e) => {
    e.preventDefault();
    const result = await actions.updateContact(params.id, contact); // Llamada corregida
  
    if (result) {
      Swal.fire('Contacto actualizado con éxito', '', 'success');
      navigate('/'); // Redirigir a la lista de contactos
    } else {
      Swal.fire('Error al actualizar el contacto', '', 'error');
    }
  };

  return (
    <div className="container mt-5">
      <h2 className="text-center">Editar Contacto</h2>
      <form onSubmit={handleSubmit} className="mt-4">
        <div className="mb-3">
          <label htmlFor="name" className="form-label">Nombre</label>
          <input
            type="text"
            className="form-control"
            id="name"
            name="name"
            value={contact.name}
            onChange={handleChange}
            placeholder="Ingresa el nombre"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="address" className="form-label">Dirección</label>
          <input
            type="text"
            className="form-control"
            id="address"
            name="address"
            value={contact.address}
            onChange={handleChange}
            placeholder="Ingresa la dirección"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="email" className="form-label">Correo Electrónico</label>
          <input
            type="email"
            className="form-control"
            id="email"
            name="email"
            value={contact.email}
            onChange={handleChange}
            placeholder="Ingresa el correo electrónico"
            required
          />
        </div>

        <div className="mb-3">
          <label htmlFor="phone" className="form-label">Teléfono</label>
          <input
            type="text"
            className="form-control"
            id="phone"
            name="phone"
            value={contact.phone}
            onChange={handleChange}
            placeholder="Ingresa el número de teléfono"
            required
          />
        </div>

        <button type="submit" className="btn btn-primary">Guardar Cambios</button>
        <Link to="/" className="btn btn-secondary ms-3">Cancelar</Link>
      </form>
    </div>
  );
};

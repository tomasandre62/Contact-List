import React, { useContext } from 'react';
import { Context } from '../store/appContext';
import { Link, useParams } from 'react-router-dom';
import Swal from 'sweetalert2';

const ContactCard = ({ contact }) => {
  const { store, actions } = useContext(Context);

  const handleDelete = async (id) => {
    Swal.fire({
      title: 'Estás seguro que deseas eliminar el contacto?',
      showDenyButton: true,
      showCancelButton: true,
      confirmButtonText: 'Aceptar',
      denyButtonText: 'Cancelar'
    }).then((response) => {
      if (response.isConfirmed) {
        Swal.fire('Contacto eliminado con éxito', '', 'success');
        actions.deleteContact(id);
      } else if (response.isDenied) {
        Swal.fire('El contacto NO fue eliminado', '', 'info');
      }
    });
  }

  return (
    <div className="col-lg-6 col-xl-4 col-md-6 col-sm-12">
      <div className="card card-default p-2 contact-card">
        <img src="https://icons.veryicon.com/png/o/miscellaneous/rookie-official-icon-gallery/225-default-avatar.png" className="mr-3 img-fluid rounded" alt="Avatar Image" />
        <div className="media-body ms-3">
          <h5 className="mt-0 mb-2 text-dark">{contact.name}</h5>
          <ul className="list-unstyled text-smoke text-smoke">
            <li className="d-flex">
              <i className="mdi mdi-map mr-1"></i>
              <span>{contact.address}</span>
            </li>
            <li className="d-flex">
              <i className="mdi mdi-email mr-1"></i>
              <span>{contact.email}</span>
            </li>
            <li className="d-flex">
              <i className="mdi mdi-phone mr-1"></i>
              <span>{contact.phone}</span>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default ContactCard;
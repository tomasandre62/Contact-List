import React, { useState, useContext, useEffect } from 'react';
import { useParams } from 'react-router';
import { Link } from 'react-router-dom';
import { Context } from '../store/appContext';
import Swal from 'sweetalert2';

export const UpdateContact = () => {
  const { store, actions } = useContext(Context);
  const [contact, setContact] = useState({});
  const params = useParams();

  const findContact = () => {
    console.log(store.contactList);
    const contactEdit = store.contactList.find((element) => element.id == params.id)
    console.log(contactEdit);
    setContact(contactEdit);
  };

  useEffect(() => {
    findContact()
  }, [store.contactList]);

  return (
    <div>UpdateContact</div>
  );
};
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import injectContext from './store/appContext';
import ContactList from './views/ContactList';
import { AddContact } from './views/AddContact';
import { UpdateContact } from './views/UpdateContact';
import { NotFound } from './views/NotFound';
import './App.css';

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<ContactList />} />
          <Route path="/addcontact" element={<AddContact />} />
          <Route path="/update/:id" element={<UpdateContact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </BrowserRouter>
    </>
  );
}

export default injectContext(App);
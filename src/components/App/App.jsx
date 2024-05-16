import Loader from '../Loader/Loader';
import Error from '../Error/Error'
import ContactForm from "../ContactForm/ContactForm";
import SearchBox from "../SearchBox/SearchBox";
import ContactList from "../ContactList/ContactList";
import "./App.css";
import { fetchContacts } from '../../redux/contactsOps';
import { useDispatch, useSelector } from "react-redux";
import {useEffect} from 'react';



export default function App() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(fetchContacts())
  }, [dispatch]);
  
  const isLoading = useSelector(state => state.contacts.loading);
  const isError = useSelector(state => state.contacts.error);
  return (
    <div>
      <h1>Phonebook</h1>
      {isLoading && <Loader>Loading... Please wait!</Loader>}
      {isError ? <Error>Sorry! Something went wrong. Please try again...</Error> : <>
      <ContactForm />
      <SearchBox />
      <ContactList /></>}
      
    </div>
  );
}
import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import PageTitle from "../../components/PageTitle/PageTitle";
import ContactList from "../../components/ContactList/ContactList";
import ContactForm from "../../components/ContactForm/ContactForm";
import SearchBox from "../../components/SearchBox/SearchBox";
import Error from "../../components/Error/Error";
import Loader from '../../components/Loader/Loader';
import { fetchContacts } from "../../redux/contacts/oprations";
import { selectError, selectLoading } from "../../redux/contacts/selectors";


export default function ContactsPage() {
  const dispatch = useDispatch();
  const isLoading = useSelector(selectLoading);
  const isError = useSelector(selectError);

  useEffect(() => {
    dispatch(fetchContacts());
  }, [dispatch]);

  return (
    <>
      <PageTitle>Contacts</PageTitle>
      <div>{isLoading && <Loader>Loading... Please wait!</Loader>}</div>
      {isError ? <Error>Sorry! Something went wrong. Please try again...</Error> : <>
      <ContactForm />
      <SearchBox />
      <ContactList /></>}
    </>
  );
}

import { FaUser } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";


import { useDispatch } from "react-redux";
import { deleteContact } from "../../redux/contacts/oprations";

import css from "./Contact.module.css";

export default function Contact({ filteredContacts: { id, name, number } }) {
  const dispatch = useDispatch();
  const handleDelete = () => dispatch(deleteContact(id));
  return (
      <li className={css.listItem}>
      <div className={css.contactInfo}>
        <p className={css.contactItem}><FaUser /> {name}</p>
        <p className={css.contactItem}><FaPhone /> {number}</p>
      </div>
      <button className={css.deleteBtn} type="button" onClick={handleDelete}>Delete</button>
    </li>
    
  );
}
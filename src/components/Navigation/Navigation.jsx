import { NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectIsLoggedIn } from "../../redux/auth/selectors";
import css from "./Navigation.module.css";
import { RiHome3Line } from "react-icons/ri";
import { IoIosContacts } from "react-icons/io";

export default function Navigation() {
  const isLoggedIn = useSelector(selectIsLoggedIn);

  return (
    <nav>
      <NavLink className={css.link} to="/">
        <RiHome3Line /><span className={css.sp}>Home</span> 
      </NavLink>
      {isLoggedIn && (
      <NavLink className={css.link} to="/contacts">
        <IoIosContacts /><span className={css.sp}>Contacts</span>
      </NavLink>
      )}
    </nav>
  );
}

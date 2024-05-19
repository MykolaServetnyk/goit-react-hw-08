import { useDispatch, useSelector } from "react-redux";
import { selectUser } from "../../redux/auth/selectors";
import { logOut } from "../../redux/auth/operations";
import Button from '@mui/material/Button';
import { MdOutlineLogout } from "react-icons/md";
import css from "./UserMenu.module.css";

export default function UserMenu() {
  const dispatch = useDispatch();
  const user = useSelector(selectUser);

  const handleLogout = () => {
    dispatch(logOut());
  };

  return (
    <div className={css.wrapper}>
      <p className={css.username}>Welcome, {user.name}</p>
      <Button variant="contained" endIcon={<MdOutlineLogout />} type='button' onClick={handleLogout}>
        Logout
      </Button>
    </div>
  );
}

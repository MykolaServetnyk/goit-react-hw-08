import PageTitle from "../../components/PageTitle/PageTitle";
import { selectUser } from "../../redux/auth/selectors";
import {useSelector} from 'react-redux';

export default function HomePage() {
  const user = useSelector(selectUser);
  return (
    <div>
      <PageTitle>
        Welcome, {user.name}
        <span role="img" aria-label="Greeting icon">
          💁‍♀️
        </span>
      </PageTitle>
      <p>Create your first list of contacts with us</p>
    </div>
  );
}

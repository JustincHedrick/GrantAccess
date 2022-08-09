import { Link } from 'react-router-dom';
import * as userService from '../../utilities/users-service';

export default function NavBar({ user, setUser }) {

  function handleLogOut() {
    // Remove token using the user service
    userService.logOut();
    // Update user state in App
    setUser(null);
  }

  return (
    <nav>
      {user ? 
      <>
        <Link to="/profile"><span>{user.name}</span></Link>
        &nbsp; | &nbsp;
        <Link to="/home">Home</Link>
        &nbsp; | &nbsp;
        <Link to="" onClick={handleLogOut}>Log Out</Link>
      </>
      :
      // added functionality for non-users to see a nav bar
      <>
        <Link to="/home">Home</Link>
        &nbsp; | &nbsp;
        <Link to="/sign-up">Sign-up</Link>
        &nbsp; | &nbsp;
        <Link to="/login">Login</Link>
      </>
      } 
    </nav>
  );
}
import { Link } from "react-router-dom";
const Navbar = () => {
  return (
    <div className="navigation">
      <div className="navbar">
        <Link to="/">Home</Link>
        <Link to="/register">Register</Link>
        <Link to="/users">Users</Link>
        <Link to="/login">Login</Link>
        <div className="search">

        </div>
      </div>
    </div>
  );
};

export default Navbar;

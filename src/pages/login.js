import { useContext, useRef } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../context";

const Login = () => {
  const [users, setUsers] = useContext(UserContext);
  const userNameRef = useRef(null);
  const passwordRef = useRef(null);
  const handleLogin = (e) => {
    e.preventDefault();
    const userName = userNameRef.current.value;
    const password = passwordRef.current.value;
    const newUser = users.filter((user) => {
      const { firstName, email } = user;
      if (userName === firstName && email === password)
        return userName === firstName && password === email;
      else alert("no user");
    });
    setUsers(newUser);
    console.log(userName);
  };
  return (
    <>
      <div className="regform loginform" >
        <form>
          <div className="forminput logininput ">
            <label htmlFor="username">Username :</label>
            <input type="text" ref={userNameRef} />
          </div>
          <div className="forminput logininput">
            <label htmlFor="password">Password :</label>
            <input type="password" ref={passwordRef} />
          </div>
          <button onClick={handleLogin}>Login</button>
        </form>
        <Link to="/forgot">forget password?</Link>
      </div>
    </>
  );
};

export default Login;

import { Route, Routes } from "react-router-dom";
import Dashboard from "../pages/dashboard";
import Register from "../pages/userregistration";
import User from "../pages/users";
import Login from "../pages/login";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Dashboard />} />
        <Route path="/register" element={<Register />} />
        <Route path="/users" element={<User />} />
        <Route path="/login" element={<Login />} />
      </Routes>
    </>
  );
};

export default Routing;

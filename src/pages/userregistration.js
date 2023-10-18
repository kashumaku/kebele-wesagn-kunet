import { useState } from "react";
import { UserContext } from "../context";
import { useContext } from "react";

const Register = () => {
  const [users, setUsers, notification, setNotification] =
    useContext(UserContext);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [photo, setPhoto] = useState("");

  // const [message, setMessage] = useState("");
  const person = {
    id: new Date().getTime().toString(),
    firstName,
    lastName,
    email,
    phone,
  };

  const handleSubmit = () => {
    //const us = [...users, person];
    // const us = users.push(person);
    setUsers([...users, person]);
    setFirstName("");
    setLastName("");
    setEmail("");
    setPhone("");
    setNotification("User registered successfully");
    console.log(photo);
    console.log(person);
  };
  return (
    <>
      <div className="regform">
        <p style={{ color: "yellow" }}>
          <small>
            <i>{notification}</i>
          </small>
        </p>
        <div className="forminput">

          <input
            type="text"
            placeholder="Enter your first name..."

            value={firstName}
            onChange={(e) => setFirstName(e.target.value)}
          />
        </div>
        <div className="forminput">

          <input
            type="text"
            placeholder="Enter your middle name..."
            value={lastName}
            onChange={(e) => setLastName(e.target.value)}
          />
        </div>
        <div className="forminput">

          <input
            type="email"
            placeholder="Enter your email..."
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </div>
        <div className="forminput">

          <input
            type="phone"
            placeholder="Enter your phone..."
            value={phone}
            onChange={(e) => setPhone(e.target.value)}
          />
        </div>
        <div className="forminput">

          <input type="file" onChange={(e) => setPhoto(e.target.files)} placeholder="Your photo" />
        </div>
        <button onClick={handleSubmit}>Register</button>
      </div>
    </>
  );
};

export default Register;

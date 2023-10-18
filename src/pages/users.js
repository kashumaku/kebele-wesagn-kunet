import { UserContext } from "../context";
import { useContext } from "react";
const User = () => {
  const [users, setUsers] = useContext(UserContext);
  console.log(users);
  const handleRemove = (id) => {
    const newUser = users.filter((user) => {
      return user.id !== id;
    });
    setUsers(newUser);
    console.log(id, newUser);
  };
  return (
    <>
      {users.map((person, index) => {
        return (
          <div className="usercontainer" key={index}>
            <div className="img" style={{ margin: 0 }}>
              <img src="../profile/gionawi.jpg" alt="" width={60} height={60} />
            </div>
            <div className="info" key={person.id}>
              <h2>{person.firstName}</h2>
              <h3>{person.email}</h3>
              <h3>{person.phone}</h3>
            </div>
            <div className="btn">
              <button onClick={() => handleRemove(person.id)}>remove</button>
            </div>
          </div>
        );
      })}
    </>
  );
};

export default User;

import { useState } from "react";
import Navbar from "./components/navbar";
import Routing from "./components/routes";
import "./style/style.css";
import { UserContext } from "./context";
function App() {
  const [users, setUsers] = useState([]);
  const [notification, setNotification] = useState("");
  return (
    <div className="App">
      <UserContext.Provider
        value={[users, setUsers, notification, setNotification]}
      >
        <Navbar />
        <Routing />
      </UserContext.Provider>
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";
import { fetchRequest } from "./utils";
import { useState } from "react";
import { Header } from "./components/Header";
import { Login } from "./components/LogIn";
import { Pinboard } from "./components/Pinboard";

function App() {
  // states
  const [user, setUser] = useState();
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  //handlers
  const submitHandler = (e) => {
    e.preventDefault();
    fetchRequest(setUser, username, email, password);
  };

  return (
    <div className="App">
      <Header user={user} />
      {user ? (
        <Pinboard />
      ) : (
        <Login p={{ submitHandler, setUsername, setEmail, setPassword }} />
      )}
    </div>
  );
}

export default App;

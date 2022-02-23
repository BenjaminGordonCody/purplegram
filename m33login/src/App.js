import logo from "./logo.svg";
import "./App.css";
import { submitHandler } from "./utils";
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

  return (
    <div className="App">
      <Header user={user} />
      {user ? (
        <Pinboard />
      ) : (
        <Login
          p={{
            setUser,
            username,
            email,
            password,
            submitHandler,
            setUsername,
            setEmail,
            setPassword,
          }}
        />
      )}
    </div>
  );
}

export default App;

import logo from "./logo.svg";
import "./App.css";

import { useState } from "react";
import { Header } from "./components/Header";
import { Login } from "./components/LogIn";
import { SignUp } from "./components/Signup";
import { Pinboard } from "./components/Pinboard";

function App() {
  // states
  const [user, setUser] = useState({});
  const [username, setUsername] = useState();
  const [email, setEmail] = useState();
  const [password, setPassword] = useState();

  return (
    <div className="App">
      <Header user={user} />
      {user.hasOwnProperty("token") ? (
        <Pinboard />
      ) : (
        <div>
          <Login
            p={{
              setUser,
              username,
              password,
              setUsername,
              setPassword,
            }}
          />
          <SignUp
            p={{
              setUser,
              username,
              email,
              password,
              setUsername,
              setEmail,
              setPassword,
            }}
          />
        </div>
      )}
    </div>
  );
}

export default App;

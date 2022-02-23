import { Input } from "./Input";
import { submitHandler } from "../utils";

export const Login = ({ p }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler(e, p.setUser, p.username, p.email, p.password);
      }}
    >
      <h1>Log In!</h1>
      Username:
      <Input setter={p.setUsername} />
      Password:
      <Input setter={p.setPassword} />
      <button type="submit">sign up</button>
    </form>
  );
};

import { Input } from "./Input";
import { submitHandler } from "../utils";

export const SignUp = ({ p }) => {
  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        submitHandler(e, p.setUser, p.username, p.email, p.password);
      }}
    >
      <h1>Sign up!</h1>
      Username:
      <Input setter={p.setUsername} />
      Email:
      <Input setter={p.setEmail} />
      Password:
      <Input setter={p.setPassword} />
      <button type="submit">sign up</button>
    </form>
  );
};

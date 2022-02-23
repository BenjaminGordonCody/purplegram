import { Input } from "./Input";
import { submitHandler } from "../utils";

export const Login = ({ p }) => {
  return (
    <form onSubmit={submitHandler}>
      <Input setter={p.setUsername} />
      <Input setter={p.setPassword} />

      <button type="submit">sign up</button>
    </form>
  );
};

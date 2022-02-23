import { Input } from "./Input";
import { submitHandler } from "../utils";

export const SignUp = ({ p }) => {
  return (
    <form
      onSubmit={(e, p) => {
        submitHandler(e, p.setUser, p.username, p.email, p.password);
      }}
    >
      <Input setter={p.setUsername} />
      <Input setter={p.setEmail} />
      <Input setter={p.setPassword} />

      <button type="submit">sign up</button>
    </form>
  );
};

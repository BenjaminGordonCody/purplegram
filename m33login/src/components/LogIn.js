import { Input } from "./Input";

export const Login = ({ p }) => {
  return (
    <form onSubmit={p.submitHandler}>
      <Input setter={p.setUsername} />
      <Input setter={p.setEmail} />
      <Input setter={p.setPassword} />

      <button type="submit">sign up</button>
    </form>
  );
};

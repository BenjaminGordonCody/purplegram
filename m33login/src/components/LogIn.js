export const Login = ({ p }) => {
  return (
    <form onSubmit={p.submitHandler}>
      <input
        onChange={(e) => {
          p.setUsername(e.target.value);
        }}
      ></input>
      <input
        onChange={(e) => {
          p.setEmail(e.target.value);
        }}
      ></input>
      <input
        onChange={(e) => {
          p.setPassword(e.target.value);
        }}
      ></input>
      <button type="submit">sign up</button>
    </form>
  );
};

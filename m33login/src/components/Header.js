export const Header = ({ user }) => {
  let headerMessage;

  if (user.hasOwnProperty("err")) {
    headerMessage = "Login failed";
  } else if (user.hasOwnProperty("username")) {
    headerMessage = `Welcome ${user.username}`;
  } else {
    headerMessage = "Please log in";
  }
  return (
    <div className="header">
      <h2>{headerMessage}</h2>
    </div>
  );
};

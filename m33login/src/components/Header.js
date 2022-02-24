import { CrudButtons } from "./CRUDButtons";
import { Logo } from "./Logo";

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
    <div id="header">
      <Logo />
      <h3>{headerMessage}</h3>
      <CrudButtons user={user} />
    </div>
  );
};

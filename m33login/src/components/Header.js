export const Header = ({ user }) => {
  return (
    <div className="header">
      <h2>{user ? `Welcome ${user.username}` : "Please log in"}</h2>
    </div>
  );
};

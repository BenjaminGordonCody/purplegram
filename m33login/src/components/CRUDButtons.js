import { fetchRequestDeleteUser } from "../utils";

export const CrudButtons = ({ user }) => {
  return (
    <div className="crudButtons">
      <button
        onClick={() => {
          fetchRequestDeleteUser(user);
        }}
      >
        Delete Account
      </button>
    </div>
  );
};

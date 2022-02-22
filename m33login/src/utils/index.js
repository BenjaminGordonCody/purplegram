export const fetchRequest = async (setUser, username, email, password) => {
  try {
    const response = await fetch(`${process.env.REACT_APP_REST_API}user`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({
        username,
        email,
        password,
      }),
    });
    const data = await response.json();
    setUser(data);
  } catch (error) {
    console.log(error);
  }
};

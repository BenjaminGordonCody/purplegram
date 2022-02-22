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

export const fetchPicsum = async (num, setPicArr) => {
  const response = await fetch(`https://picsum.photos/v2/list?page=${num}`);
  const data = await response.json();
  console.log(data);
  setPicArr(data);
};

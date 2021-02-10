export const fetchUsers = async () => {
  const data = await fetch("http://localhost:5000/bank").then((res) =>
    res.json()
  );

  return data;
};

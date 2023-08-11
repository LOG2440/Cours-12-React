import { useState, useEffect } from "react";

const url = "https://jsonplaceholder.typicode.com/users";

const fetchUser = async (userId) => {
  const options = { headers: { "accept-language": "fr" } };
  const response = await fetch(`${url}/${userId}`, options);
  const user = await response.json();
  return user;
};

const HookEffectFetch = ({ userId = 1 }) => {
  const [name, setName] = useState("");
  useEffect(() => {
    const fetchData = async () => {
      // userId = Math.floor(Math.random()*9)+1;
      const user = await fetchUser(userId);
      setName(user.name);
    };
    fetchData();
  }, []);

  return <div>{name}</div>;
};

export default HookEffectFetch;

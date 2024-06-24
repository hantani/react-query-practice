import axios from "axios";

const BASE_URL = "https://koreanjson.com";

export const fetchUsers = async () => {
  return await axios.get(`${BASE_URL}/users`).catch((error) => {
    console.log(error);
  });
};

export const fetchUser = async (id: string | undefined) => {
  return await axios.get(`${BASE_URL}/users/${id}`).catch((error) => {
    console.log(error);
  });
};

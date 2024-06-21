import axios from "axios";

const BASE_URL = "https://koreanjson.com";

export const fetchUsers = async () => {
  return await axios.get(`${BASE_URL}/users`);
};

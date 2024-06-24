import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";
import { Link } from "react-router-dom";

function Users() {
  const { isLoading, data: json } = useQuery({
    queryKey: ["allUsers"],
    queryFn: fetchUsers,
  });

  console.log(json?.data);

  interface User {
    id: number;
    name: string;
    username: string;
    email: string;
    phone: string;
    website: string;
    createdAt: string;
    updatedAt: string;
    address: {
      street: string;
      city: string;
      district: string;
      province: string;
      zipcode: string;
    };
  }

  return (
    <ul>
      {isLoading ? (
        <div>Loading</div>
      ) : (
        json?.data.map((user: User) => (
          <li key={user.id}>
            <Link to={`/${user.id}`} state={{ name: user.name }}>
              {user.name}
            </Link>
          </li>
        ))
      )}
    </ul>
  );
}

export default Users;

import { useParams, useLocation } from "react-router-dom";
import { useQuery } from "@tanstack/react-query";
import { fetchUser } from "../api";

function User() {
  const { id } = useParams();
  const { state } = useLocation();
  const { isLoading, data: json } = useQuery({
    queryKey: ["User", id],
    queryFn: () => fetchUser(id),
  });
  console.log(json);

  return (
    <>
      {isLoading ? (
        <div>"Loading..."</div>
      ) : json?.data ? (
        <div>{json.data.name}</div>
      ) : (
        <div>No User</div>
      )}
    </>
  );
}

export default User;

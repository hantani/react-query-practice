import { useQuery } from "@tanstack/react-query";
import { fetchUsers } from "../api";

function Home() {
  const { isLoading, data } = useQuery({
    queryKey: ["allUsers"],
    queryFn: fetchUsers,
  });

  console.dir(data);

  return <div>Home</div>;
}

export default Home;

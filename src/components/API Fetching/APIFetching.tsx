import { useFetchUsers } from "../../hooks/useFetchUsers";



const APIFetching = () => {
 const {users,loading, error} = useFetchUsers()

  if (loading) return <h1>Loading...</h1>;
  if (error) return <h1>Error: {error}</h1>;
  if (!users.length) return <h1>No users found</h1>;

  return (
    <>
      <ul style={{ display: "flex", flexDirection: "column" }}>
        {users.length > 0 &&
          users.map((user) => <li key={user.id}>{user?.name}</li>)}
      </ul>
      {error && <h2 style={{ color: "red" }}>{error}</h2>}
    </>
  );
};

export default APIFetching;

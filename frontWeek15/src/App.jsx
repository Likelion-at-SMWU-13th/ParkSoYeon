import { useQuery } from "@tanstack/react-query";
import "./App.css";
function App() {
  async function getPosts() {
    const response = await fetch(`https://jsonplaceholder.typicode.com/posts`);
    return await response.json();
  }
  const queryResult = useQuery({
    queryKey: ["posts"],
    queryFn: getPosts,
  });

  console.log("queryResult", queryResult);
  return <>tanstack query 실습!</>;
}

export default App;

// costum hook
import { useFetch } from "../hooks/useFetch";
// components
import ProductsList from "../components/ProductsList";

function Home() {
  const { data, isPending, error } = useFetch("https://dummyjson.com/products");
  return (
    <div>
      {isPending && <h3>Loading...</h3>}
      {data && <ProductsList data={data} />}
    </div>
  );
}

export default Home;

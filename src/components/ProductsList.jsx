// compomemts
import ProductCart from "./ProductCart";

function ProductsList({ data }) {
  console.log(data);
  return (
    <div
    
      style={{
        display: "flex",
        flexWrap: "wrap",
        justifyContent: "space-between",
        marginTop:'15px'
      }}
    >
      {data.products.map((product) => {
        return <ProductCart key={product.id} product={product} />;
      })}
    </div>
  );
}

export default ProductsList;

import ProductCart from "@/components/ProductCart";
import { getAllProductsService } from "@/services/product.services"

const Home = async () => {
  const allProducts = await getAllProductsService();

  return (
    <div>
      <section className="w-screen flex flex-wrap gap-5">
        {allProducts &&
          allProducts.map((product) => {
            return <ProductCart product={product} key={product.name} />;
          })}
      </section>
    </div>
  );
};

export default Home;

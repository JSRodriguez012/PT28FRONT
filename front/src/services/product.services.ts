import { IProduct } from "@/interfaces/IProduct";

const APIURL = process.env.NEXT_PUBLIC_API_URL;

export const getAllProductsService = async () => {
  try {
    const res = await fetch(`${APIURL}/products`, {
      method: "GET",
    });

    const products: IProduct[] = await res.json();
    return products;
  } catch (error: any) {
    throw new Error(error);
  }
};

export const getProductByIdService = async (id: string) => {
    try{
      const allProducts = await getAllProductsService();
      const product = allProducts.find((product) => product.id === Number(id));
      if (!product) {
        throw new Error("No se encontro un producto con ese ID");
      }

      return product;

    } catch (error: any) {
      throw new Error(error);
    }
};

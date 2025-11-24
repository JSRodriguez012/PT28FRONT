import { IProduct } from "@/interfaces/IProduct";
import ButtonAddToCart from "@/components/buttonAddToCart";

interface CartProps {
  product: IProduct;
}

const ProductCart = ({ product }: CartProps) => {
  return (
    <div key={product.id} className="w-[360px] h-[600px]">
      <img src={product.image} alt={`Image product ${product.name}`} />

      <p className="text-blue-700 text-3xl">{product.name}</p>
      <p className="text-sm">{product.description}</p>
      <p className="text-blue-700 text-3xl">${product.price}</p>

      {/* 🔥 Aquí agregamos el botón */}
      <ButtonAddToCart product={product} />
    </div>
  );
};

export default ProductCart;






// import { IProduct } from "@/interfaces/IProduct";
// import Image from "next/image"; // 'Image' is defined but never used.

// interface CartProps {
//   product:IProduct ;
// }

// const ProductCart = ({ product }: CartProps) => {
//   return (
//     <div key={product.id} className="w-[360px] h-[600px]">
//       {/* <Image
//         src={product.image}
//         alt={`Image product ${product.name}`}
//         width={360}
//         height={300}
//       /> */}

//       <img src={product.image} alt={`Image product ${product.name}`} />

//       <p className="text-blue-700 text-3xl">{product.name}</p>
//       <p className="text-sm">{product.description}</p>
//       <p className="text-blue-700 text-3xl">${product.price}</p>
//     </div>
//   );
// };

// export default ProductCart;

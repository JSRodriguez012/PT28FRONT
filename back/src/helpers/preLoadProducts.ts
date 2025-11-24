import { AppDataSource } from "../config/dataSource";
import { Product } from "../entities/Product";
import { ProductRepository } from "../repositories/product.repository";

interface IProduct {
  name: string;
  price: number;
  description: string;
  image: string;
  categoryId: number;
  stock: number;
}

const productsToPreLoad: IProduct[] = [
  {
    name: "Equipo de Parámetros y Bioseñales",
    price: 1699,
    description:
      "El Equipo para el Estudio de Parámetros y Bioseñales Humanas en Biomedicina, Controlado desde Computador (PC), diseñado por EDIBON, permite a los estudiantes aprender a interpretar y realizar las mediciones de las bioseñales más...",
    image:
      "https://www.edibon.com/67342-home_default/equipo-de-parametros-y-biosenales-en-biomedicina-controlado-desde-computador-pc.jpg",
    categoryId: 1,
    stock: 10,
  },
  {
    name: "Equipo de Simulación de Bioseñales ",
    price: 8999,
    description:
      "El Simulador de Bioseñales de Pacientes en Biomedicina, Controlado desde Computador (PC), diseñado por EDIBON, permite a los estudiantes aprender a interpretar y tomar las medidas de las bioseñales más importantes: electrocardiograma...",
    image:
      "https://www.edibon.com/67131-home_default/equipo-de-simulacion-de-biosenales-de-pacientes-en-biomedicina-controlado-desde-computador-pc.jpg",
    categoryId: 2,
    stock: 10,
  },
  {
    name: "Equipo de Espirometría en Biomedicina",
    price: 1799,
    description:
      "El Equipo para el Estudio de la Espirometría, Controlado desde Computador (PC), diseñado por EDIBON, está formado por un espirómetro profesional y un simulador de respiración compuesto por un actuador lineal eléctrico y dos simuladores de....",
    image:
      "https://www.edibon.com/66966-home_default/equipo-de-espirometria-en-biomedicina-controlado-desde-computador-pc.jpg",
    categoryId: 3,
    stock: 10,
  },
  {
    name: "Equipo de Electrocirugía en Biomedicina",
    price: 1399,
    description:
      "El Equipo para el Estudio de la Electrocirugía en Biomedicina, consiste en un equipo de electrocirugía utilizado en la medicina moderna para cortar tejidos, restringir el flujo sanguíneo y mejorar la visibilidad del cirujano durante las...",
    image:
      "https://www.edibon.com/64340-home_default/equipo-de-electrocirugia-en-biomedicina.jpg",
    categoryId: 4,
    stock: 10,
  },
  {
    name: "Equipo de Sistema Circulatorio en Biomedicina",
    price: 3249,
    description:
      "El Equipo para el Estudio del Sistema Circulatorio en Biomedicina, Controlado desde Computador (PC), diseñado por EDIBON, permite a los estudiantes aprender a interpretar los resultados obtenidos por el viscosímetro y los sensores de...",
    image:
      "https://www.edibon.com/67336-home_default/equipo-de-sistema-circulatorio-en-biomedicina-controlado-desde-computador-pc.jpg",
    categoryId: 5,
    stock: 10,
  },
  {
    name: "Equipo de Electroterapia en Biomedicina",
    price: 999,
    description:
      "Equipo para el Estudio de la Respuesta Eléctrica en Biomedicina, Controlado desde Computador (PC), está formado por una máquina de electroterapia, utilizado en el campo profesional y una caja de interfaz de control.La caja de interfaz de...",
    image:
      "https://www.edibon.com/64335-home_default/equipo-de-electroterapia-en-biomedicina-controlado-desde-computador-pc.jpg",
    categoryId: 6,
    stock: 10,
  },
];

export const preLoadProducts = async () => {
  const products = await ProductRepository.find();
  if (!products.length)
    await AppDataSource.createQueryBuilder()
      .insert()
      .into(Product)
      .values(productsToPreLoad)
      .execute();
  console.log("Products preloaded");
};

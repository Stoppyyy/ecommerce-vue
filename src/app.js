import axios from "axios";
import { useCartStore } from "./stores/cart";

export const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  return response.data;
};

const getProduct = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  return response.data;
};

export const getCategories = async () => {
  const response = await axios.get(
    "https://fakestoreapi.com/products/categories",
  );
  return response.data;
};

export const getProductsByCategory = async (category) => {
  const response = await axios.get(
    `https://fakestoreapi.com/products/category/${category}`,
  );
  return response.data;
};


export function handleClick(prod) {

  const cartStore = useCartStore();

  const existingIdx = cartStore.lines.findIndex(line => line.item.id === prod.id);

  if (existingIdx >= 0) {
    cartStore.lines[existingIdx].qty += 1;
    console.log(`Quantità del prodotto con id ${prod.id}  ${JSON.stringify(cartStore.lines[existingIdx].qty)}`);
  } else {
    cartStore.lines.push({ item: prod, qty: 1, price: prod.price });
    console.log(`Prodotto con id ${prod.id} aggiunto al carrello con quantità: 1`);
  }

  count = cartStore.lines.map(i => i.qty).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  const totalQuantity = cartStore.lines.map(i => i.qty).reduce((accumulator, currentValue) => accumulator + currentValue, 0);
  console.log('Totale prodotti nel carrello:', totalQuantity)

  const totalPrice = cartStore.lines.reduce((accumulator, currentValue) => accumulator + (currentValue.price * currentValue.qty), 0);
  console.log('Prezzo totale nel carrello:', totalPrice);
}

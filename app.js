const axios = require("axios");

const getProducts = async () => {
  const response = await axios.get("https://fakestoreapi.com/products");
  const prodotti = response.data;

  for (let prod of prodotti) {
    console.log(
      `prodotto: ${prod.id}, ${prod.title}, ${prod.price}€, ${prod.category}, ${prod.image}`,
    );
  }
};

const getProduct = async (id) => {
  const response = await axios.get(`https://fakestoreapi.com/products/${id}`);
  const prod = response.data;

  console.log(
    `prodotto: ${prod.title}, ${prod.price}€, ${prod.category}, ${prod.image}`,
  );
};

const getCategories = async () => {
    const response = await axios.get('https://fakestoreapi.com/products/categories');
    const categories = response.data;
    
  
    for (let cat of categories) {
      
      console.log(`Categoria:  ${cat}`);
    };
}



const getProductsByCategory = async (category) => {
    const response = await axios.get(`https://fakestoreapi.com/products/category/${category}`);
    const prodotti = response.data;
  
    for (let prod of prodotti) {
      
      console.log(`Nomi:  ${prod.title}`);
    };
    
  };

(async () => {
    // await getProducts();
    
    // await getProduct(12);
    
    await getCategories();
    
    await getProductsByCategory('electronics');

})();

import { ref } from "vue";

const getProductsData = () => {
  const products = ref([]);
  const error = ref(null);
  const loadProductsData = async () => {
    try {
      let data = await fetch(
        "https://api.npoint.io/e5a951fdf3893ef1bb30/products"
      );
      products.value = await data.json();
      console.log(products);
      if (!data.ok) {
        throw Error("no data");
      }
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { loadProductsData, products, error };
};
export default getProductsData;

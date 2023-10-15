import { ref } from "vue";

const getProductsData = () => {
  const products = ref([]);
  const error = ref(null);
  const loadData = async () => {
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
  return { loadData, products, error };
};
export default getProductsData;

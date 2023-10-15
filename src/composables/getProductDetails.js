import { ref } from "vue";

const getProductDetails = (id) => {
  const product = ref(null);
  const error = ref(null);

  const loadData = async () => {
    try {
      let data = await fetch(
        `https://api.npoint.io/fda4e9552d5f4096efb8/products/${id}`
      );
      if (!data.ok) {
        throw Error("no product details");
      }
      product.value = await data.json();
    } catch (err) {
      error.value = err.message;
      console.log(error.value);
    }
  };
  return { loadData, product, error };
};
export default getProductDetails;

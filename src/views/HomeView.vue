<template>
  <div class="container">
    <div v-if="products.length" class="home">
      <div v-for="product in products" class="productBg">
        <router-link
          :to="{ name: 'ProductDetails', params: { id: product.id } }"
          class="product"
        >
          {{ console.log(product.src) }}
          <img :src="product.src" alt="sm" class="productImg" rel="preload" />
          <p>{{ product.name }}</p>
          <div class="flexRowEnd">
            <font-awesome-icon :icon="['fas', 'bag-shopping']" class="ico" />
            <div class="price">{{ product.price }}€</div>
          </div>
        </router-link>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
  <Footer />
</template>

<script>
import getProductsData from "../composables/getProductsData";
import Loader from "../components/Loader.vue";
import Footer from "../components/Footer.vue";

export default {
  name: "HomeView",
  components: { Loader, Footer },
  setup() {
    const { loadProductsData, products, error } = getProductsData();
    loadProductsData();
    return { products, error };
  },
};
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  flex-direction: row;
  flex-wrap: wrap;
  margin-bottom: 200px;
}

.productBg {
  background-color: antiquewhite;
  padding: 48px;
  border-radius: 16px;
  margin: 16px;
}

.product {
  color: #9e4d30;
  font-weight: 600;
  text-decoration: none;
}

.product:hover {
  color: #d38f76;
}

.productImg {
  width: 200px;
  border-radius: 8px;
}

.price {
  text-align: right;
  font-size: 24px;
}

.ico {
  font-size: 20px;
  margin-right: 4px;
}
</style>

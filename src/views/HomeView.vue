<template>
  <div class="home">
    <div v-if="products.length">
      <div v-for="product in products" class="products">
        <router-link :to="{ name: 'ProductDetails', params: { id: product.id } }" class="productName">
          <img :src="product.src" alt="sm" class="productImg" rel="preload">
          <p>{{ product.name }}</p>
          <p class="price">{{ product.price }}€</p>
        </router-link>
      </div>
    </div>
    <div v-else>
      <Loader />
    </div>
  </div>
</template>

<script>
import getProductsData from "../composables/getProductsData"
import Loader from "../components/Loader.vue"

export default {
  name: 'HomeView',
  components: { Loader },
  setup() {
    const { loadData, products, error } = getProductsData()
    loadData()
    return { products, error }
  }
}
</script>

<style>
.home {
  display: flex;
  justify-content: center;
  flex-direction: row;
  /* flex-wrap: wrap; */
}

.products {
  background-color: antiquewhite;
  padding: 48px;
  border-radius: 16px;
  margin: 16px;
}

.productName {
  color: #9e4d30;
  font-weight: 600;
  text-decoration: none;
}

.productName:hover {
  color: #d38f76;
}

.productImg {
  width: 200px;
  border-radius: 8px;
}

.price {
  font-weight: 600;
}
</style>
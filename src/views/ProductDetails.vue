<template>
    <div class="productDetails container">
        <div v-if="product">
            <h2>{{ product.name }}</h2>
            <img :src="product.src" :alt="product.alt" class="productImg" rel="preload">
            <h3>{{ product.price }}€</h3>
            <div class="flexRowCenter">
                <button @click="minus">-</button>
                <div>{{ quantity }}</div>
                <button @click="plus">+</button>
            </div>
        </div>
        <div v-else>
            <Loader />
        </div>
    </div>
</template>

<script>
import getProductDetails from "../composables/getProductDetails"
import Loader from "../components/Loader.vue"
import { ref } from "vue"

export default {
    props: ["id"],
    components: { Loader },
    setup(props) {
        let quantity = ref(1)
        const { loadData, product, error } = getProductDetails(props.id - 1)
        loadData()

        const minus = () => {
            if (quantity.value > 1) {
                quantity.value--
            }
        }
        const plus = () => {
            if (quantity.value < 10) {
                quantity.value++
            }
        }
        return { product, error, quantity, minus, plus }
    }
}
</script>

<style>
.productDetails button {
    cursor: pointer;
    padding: 16px;
    margin: 16px;
    border: 0;
    border-radius: 8px;
}
</style>
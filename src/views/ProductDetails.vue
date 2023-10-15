<template>
    <div class="product">
        <div v-if="product">
            <h2>{{ product.name }}</h2>
        </div>
        <div v-else>
            <Loader />
        </div>
    </div>
</template>

<script>
import getProductDetails from "../composables/getProductDetails"
import Loader from "../components/Loader.vue"

export default {
    props: ["id"],
    components: { Loader },
    setup(props) {
        const { loadData, product, error } = getProductDetails(props.id)
        loadData()
        return { product, error }
    }
}
</script>
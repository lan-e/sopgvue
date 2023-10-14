<template>
    <div class="product">
        <div v-if="product">
            <h2>{{ product.name }}</h2>
        </div>
        <div v-else>
            Loading product details...
        </div>
    </div>
</template>

<script>
import getProductDetails from "../composables/getProductDetails"

export default {
    props: ["id"],
    setup(props) {
        const { loadData, product, error } = getProductDetails(props.id)
        loadData()
        return { product, error }
    }
}
</script>
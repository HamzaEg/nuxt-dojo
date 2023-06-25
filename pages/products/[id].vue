<template>
    <div>
        <p>Product details for {{ id }}</p>
        <p>Lorem ipsum, dolor sit amet consectetur adipisicing elit. Impedit iste earum unde veritatis voluptates, porro ut vero! Debitis, eaque maiores.</p>
    </div>
</template>

<script setup>
const { id } = useRoute().params
definePageMeta({
    layout: 'products'
})
</script>

<style lang="scss" scoped>

</style>
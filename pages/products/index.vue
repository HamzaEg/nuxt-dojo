<template>
    <div>
        <h2>products</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in products" :key="p">
                <nuxt-link :to="`/prodouct/${p.id}`">{{p.Name}}</nuxt-link>
            </div>
        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

const { data: products } = await useFetch('http://egn.ddns.net:1080/api/category')
console.log(products)
</script>

<style lang="scss" scoped>

</style>
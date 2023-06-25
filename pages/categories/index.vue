<template>
    <div>
        <h2>Categories</h2>
        <div class="grid grid-cols-4 gap-5">
            <div v-for="p in persons" :key="p">
                <nuxt-link :to="`/category/${p.id}`">{{p.FirstName}} {{p.LastName}}</nuxt-link>
            </div>
        </div>

    </div>
</template>

<script setup>
definePageMeta({
    layout: 'products'
})

const { data: persons } = await useFetch('http://egn.ddns.net:1080/api/persons')
console.log(persons)
</script>

<style lang="scss" scoped>

</style>
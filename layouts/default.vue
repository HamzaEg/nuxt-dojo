<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/">Nuxt Dojo</nuxt-link>
                <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/Categories">Categories</nuxt-link></li>
                    <li><nuxt-link to="/Products">Products</nuxt-link></li>
                </ul>
            </nav>
        </header>
         
         <div>
            <slot/>
        </div>
        
        </div>
</template>

<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
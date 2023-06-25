<template>
    <div>
        <header>
            <nav>
                <nuxt-link to="/products">Nuxt Dojo Merch</nuxt-link>
            </nav>
        </header>
         
         <div>
            <slot/>
        </div>
        
        <footer>
            <ul>
                    <li><nuxt-link to="/">Home</nuxt-link></li>
                    <li><nuxt-link to="/about">About</nuxt-link></li>
                    <li><nuxt-link to="/Products">Products</nuxt-link></li>
                </ul>
        </footer>
        </div>
</template>


<style scoped>
.router-link-exact-active {
    color: #12b488;
}
</style>
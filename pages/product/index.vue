<template>
    <div v-for="product in Value" :key="product.id">
           <h2>product name is {{ product.title}}</h2>
    </div>
</template>

<script setup>
const { data: products, error } = await useFetch('https://fakestoreapi.com/products')
const url = 'https://fakestoreapi.com/products'

async function getProducts(url) {
    try {
        const response = await usefetch(url);  
        const product = await response.json(); 
        return product;  
    } catch (error) {
        console.error("Error fetching products:", error);
        return null; 
    }
}

const Value = getProducts(url)
console.log(Value)

</script>

<style scoped>

</style>
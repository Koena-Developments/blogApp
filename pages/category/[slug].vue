<template>
    <div>
        <h2>category {{ slug }}</h2>
        <p>
            you are currently viewing devices of category {{ slug }} 
            and you are viewing an item with the id of {{ id }}
        
       </p>
    </div>
</template>

<script setup>
const route = useRoute()
const slug = route.params.slug
const id = route.params.id

</script>

<style lang="scss" scoped>

</style>
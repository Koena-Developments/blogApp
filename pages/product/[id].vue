<template>
    <div>
        <h2>
            product number {{ id }} details
        </h2>
        <p>
            I think we getting somewhere number {{ id }}
        </p>
    </div>
</template>

<script setup>
const {id} = useRoute().params
</script>

<style scoped>

</style>
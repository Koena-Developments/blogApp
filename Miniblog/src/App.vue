<template>
 <div>
  <nav>
    <router-link to="/">Home</router-link>
    <router-link to="/create">Create Post</router-link>
  </nav>

  <router-view /> 
 </div>
</template>

<script setup>

</script>

<style>
nav {
  padding: 1rem;
  background: #eee;
}
nav a {
  margin-right: 1rem;
}
</style>
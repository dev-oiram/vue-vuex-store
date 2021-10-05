<template>
  <h1>Store</h1>
  <hr>
  <componentone></componentone>
</template>

<script>
import componentone from '@/components/componentone.vue'
export default {
  name: 'App',
  components: { componentone }
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

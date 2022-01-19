<script setup>
import useFlutterwave from "./composables/useFlutterwave.ts";

const { checkOut } = useFlutterwave("Key");

console.log(checkOut)
</script>

<template>
<button @click="checkOut">
checkout
</button>

</template>

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

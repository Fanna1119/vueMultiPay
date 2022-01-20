<script setup>
import useFlutterwaveInline from "./composables/useFlutterwaveInline.ts";

const { checkOut } = useFlutterwave(
  "FLWPUBK_TEST-6d848b45138f2522487c1d4389976d86-X"
);

function payWithFlutterwave() {
  checkOut({
    tx_ref: "RX1",
    amount: 10,
    currency: "USD",
    country: "US",
    payment_options: " ",
    // specified redirect URL
    redirect_url:
      "https://callbacks.piedpiper.com/flutterwave.aspx?ismobile=34",
    meta: {
      consumer_id: 23,
      consumer_mac: "92a3-912ba-1192a",
    },
    customer: {
      email: "cornelius@gmail.com",
      phone_number: "08102909304",
      name: "Flutterwave Developers",
    },
    callback: function (data) {
      console.log(data);
    },
    onclose: function () {
      // close modal
    },
    customizations: {
      title: "My store",
      description: "Payment for items in cart",
      logo: "https://assets.piedpiper.com/logo.png",
    },
  });
}
</script>

<template>
  <button @click="payWithFlutterwave">checkout</button>
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

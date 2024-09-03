<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Details from './components/Details.vue'

import data from './assets/data.json'
// console.log(data)

import { reactive, ref } from 'vue'

const productInfos = reactive(data)
const selectedVariant = ref(data.variants[0])
const cart = reactive([])

const changeVariant = (variant) => {
  selectedVariant.value = variant
}

const addToCart = (product) => {
  cart.push(product)
}
</script>

<template>
  <Header :cart="cart" />
  <main>
    <div class="container">
      <!-- COLONNE IMAGE -->
      <div>
        <img :src="selectedVariant.image.url" :alt="selectedVariant.image.alt" />
      </div>

      <Details
        v-bind:productInfos="productInfos"
        v-bind:selectedVariant="selectedVariant"
        v-on:changeSelectedVariant="changeVariant"
        @addProductToCart="addToCart"
      />
    </div>
  </main>
  <Footer />
</template>

<style scoped>
.container {
  display: flex;
  height: calc(
    100vh - var(--header-top-height) - var(--header-bottom-height) - var(--footer-height)
  );
  /* border: 1px solid purple; */
}

.container > div {
  width: 50%;
  /* border: 1px solid green; */
}

.container > div:last-child {
  padding: 25px 0px 25px 100px;
  box-sizing: border-box;
}

/* IMAGE BLOC */
.container > div:first-child {
  padding: 30px;
}

img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
</style>

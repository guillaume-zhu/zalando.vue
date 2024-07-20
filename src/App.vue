<script setup>
import Header from './components/Header.vue'
import Footer from './components/Footer.vue'
import Details from './components/Details.vue'

import data from './assets/data.json'
console.log(data)

import { reactive, ref } from 'vue'

const productInfos = reactive(data)

const selectedVariant = ref(data.variants[0])
</script>

<template>
  <Header />
  <main>
    <div class="container">
      <!-- COLONNE IMAGE -->
      <div></div>

      <Details v-bind:productInfos="productInfos" v-bind:selectedVariant="selectedVariant" />
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
  border: 1px solid purple;
}

.container > div {
  width: 50%;
  border: 1px solid green;
}

.container > div:last-child {
  padding: 25px 0px 25px 100px;
  box-sizing: border-box;
}
/* DESCRIPTION TOP */

h1 + p {
  font-size: 22px;
  margin-bottom: 25px;
}

h1 + p span {
  font-size: 14px;
  font-weight: lighter;
  color: var(--dark-grey);
}

/* BLOC RATE */
.rate {
  margin-bottom: 40px;
}

.rate svg {
  margin-right: 3px;
}

/* ADVISE */
.advise {
  background-color: #efeff0;
  padding: 20px;
  font-size: 14px;
  line-height: 20px;
  font-weight: lighter;
  margin-bottom: 10px;
}

/* CART BLOC */
.cart-bloc {
  display: flex;
  gap: 10px;
}

.cart-bloc button {
  font-family: inherit;
  font-size: inherit;
  font-weight: bold;
  background-color: var(--main-black);
  color: white;
  flex: 1;
  border: none;
  cursor: pointer;
}

.cart-bloc button:hover {
  opacity: 0.7;
}

.cart-bloc div {
  width: 50px;
  height: 50px;
  display: flex;
  justify-content: center;
  align-items: center;
  border: 2px solid var(--main-black);
  color: var(--main-black);
  box-sizing: border-box;
}

.cart-bloc div:hover {
  border: 3px solid var(--main-black);
}

.cart-bloc svg {
  width: 25px;
  height: 25px;
}
</style>

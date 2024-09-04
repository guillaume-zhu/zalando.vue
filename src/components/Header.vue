<script setup>
const props = defineProps({
  cart: {
    type: Array,
    Required: true
  }
})
</script>

<template>
  <header>
    <div class="headerTop">
      <div class="container">
        <p>Essayez d'abord, <span>payez après</span></p>
        <p>LIVRAISON & RETOUR <span>GRATUITS*</span></p>
        <p>Retour et <span>remboursement</span></p>
      </div>
    </div>

    <div class="headerBottom">
      <div class="container">
        <nav>
          <a href="#">Femme</a>
          <a href="#">Homme</a>
          <a href="#">Enfant</a>
        </nav>

        <img src="../assets/img/zalando-logo.svg" alt="zalando-logo" />

        <nav>
          <font-awesome-icon :icon="['far', 'user']" />
          <font-awesome-icon :icon="['far', 'heart']" />
          <font-awesome-icon :icon="['fas', 'shopping-bag']" />
          <p v-if="cart.length > 0" class="numOfProduct">{{ cart.length }}</p>
        </nav>
      </div>
    </div>
  </header>
</template>

<style scoped>
/*-- HEADER TOP --*/

.headerTop {
  background-color: var(--light-grey);
}

.headerTop .container {
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: var(--header-top-height);
  color: var(--dark-grey);
  font-size: 12px;
}

span {
  color: var(--main-orange);
}

/*-- HEADER BOTTOM --*/

.headerBottom {
  /* border: solid 1px green; */
  border-bottom: 1px solid var(--light-grey);
}

.headerBottom .container {
  height: var(--header-bottom-height);
  display: flex;
  justify-content: space-between;
  align-items: center;
  /* border: 1px solid blue; */
}

a {
  padding: 10px 15px;
  font-weight: bold;
  cursor: pointer;
  color: var(--main-black);
}

a:first-of-type {
  color: white;
  background-color: var(--main-black);
}

img {
  width: 155px;
  /* border: 1px solid orange; */
  cursor: pointer;
}

nav {
  display: flex;
  /* border: solid 1px orange; */
  flex: 1;
  gap: 10px;
}

nav:last-of-type {
  justify-content: flex-end;
  position: relative;
}

.headerBottom nav:last-of-type {
  justify-content: flex-end;
}

svg {
  color: var(--main-black);
  padding: 10px;
  border: 2px solid white;
  box-sizing: content-box;
}

svg:hover {
  cursor: pointer;
  border: 2px solid var(--main-black);
}

.numOfProduct {
  position: absolute;
  top: -2px;
  right: -2px;
  background-color: var(--main-orange);
  width: 20px;
  height: 20px;
  border-radius: 50%;
  display: flex;
  justify-content: center;
  align-items: center;
  font-size: 14px;
}
</style>

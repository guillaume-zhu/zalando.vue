<script setup>
const props = defineProps({
  productInfos: {
    type: Object,
    required: true
  },
  selectedVariant: {
    type: Object,
    required: true
  }
})

// console.log(props.productInfos)
</script>

<template>
  <!------ COLONNE INFOS ------>
  <div>
    <div>
      <h2>{{ productInfos.brand }}</h2>
      <h1>{{ productInfos.name }}</h1>
      <p class="price">{{ productInfos.price }} € <span>TVA incluse</span></p>
    </div>

    <!-- BLOC RATE -->
    <div class="rate">
      <font-awesome-icon :icon="['fas', 'star']" size="lg" />
      <font-awesome-icon :icon="['fas', 'star']" size="lg" />
      <font-awesome-icon :icon="['fas', 'star']" size="lg" />
      <font-awesome-icon :icon="['fas', 'star']" size="lg" />
      <font-awesome-icon :icon="['fas', 'star-half-alt']" size="lg" />
      <span>{{ productInfos.rate }}</span>
    </div>

    <!-- COLOR -->
    <p class="selected-color">
      Couleur : <span> {{ selectedVariant.color }}</span>
    </p>

    <!-- ADVISE -->
    <p class="advise">
      Nous vous recommandons de choisir une taille au-dessus de celle habituelle.
    </p>

    <!-- CART BLOC -->
    <div class="cart-bloc">
      <button>Ajouter au panier</button>

      <div>
        <font-awesome-icon :icon="['far', 'heart']" />
      </div>
    </div>
  </div>
</template>

<style scoped>
.price {
  font-size: 22px;
  margin-bottom: 30px;
}

.price > span {
  font-size: 14px;
  font-weight: lighter;
}

/* RATE */
.rate {
  margin-bottom: 40px;
}

.rate svg {
  margin-right: 3px;
}

/* COLOR */
.selected-color {
  font-size: 16px;
}

.selected-color span {
  font-weight: normal;
}

/* ADVISE */
.advise {
  background-color: var(--light-grey);
  padding: 20px;
  margin-bottom: 10px;
}

/* CART BLOCK */
.cart-bloc {
  display: flex;
}

.cart-bloc > button {
  background-color: var(--main-black);
  color: white;
  width: 100%;
  height: 50px;
  padding: 15px;
  font-size: 16px;
  font-weight: bold;
}

.cart-bloc > button:hover {
  opacity: 0.5;
}

.cart-bloc svg {
  border: 1px solid var(--main-black);
  font-size: 50px;
  width: 50px;
  height: 50px;
  padding: 10px;
  margin-left: 10px;
}
</style>

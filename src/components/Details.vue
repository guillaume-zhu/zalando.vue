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

const isVariantSoldOut = (sizes) => {
  for (const key in sizes) {
    // console.log(sizes[key])
    if (sizes[key] > 0) {
      return false
    }
  }
  return true
}

const emit = defineEmits({
  changeSelectedVariant: null,
  addProductToCart: (product) => {
    if (product && typeof product === 'object') {
      return true
    } else {
      console.warn('Payload is required and must be an object')
      return false
    }
  }
})

const handleEmitNewVariant = (variant) => {
  const isSoldOut = isVariantSoldOut(variant.sizes)

  if (!isSoldOut) {
    emit('changeSelectedVariant', variant)
  }
}

const handleSelectSize = (sizes, quantity) => {
  const newObj = { ...props.selectedVariant }

  if (quantity > 0) {
    newObj.selectedSize = sizes
    emit('changeSelectedVariant', newObj)
    // console.log(newObj)
    // console.log(props.selectedVariant)
  }
}

const handleAddtoCart = () => {
  if (!props.selectedVariant.selectedSize) {
    alert('Veuillez sélectionner une taille !')
  } else {
    emit('addProductToCart', props.selectedVariant)
  }
}
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

    <!-- IMG BLOC -->
    <div class="img-bloc">
      <img
        v-for="variant in productInfos.variants"
        :key="variant.id"
        :src="variant.image.url"
        :alt="variant.image.alt"
        :class="{
          selectedImg: variant.id === selectedVariant.id,
          outOfStock: isVariantSoldOut(variant.sizes)
        }"
        @click="handleEmitNewVariant(variant)"
      />
    </div>

    <!-- ADVISE -->
    <p class="advise">
      Nous vous recommandons de choisir une taille au-dessus de celle habituelle.
    </p>

    <!-- SIZE -->
    <div class="sizes-bloc">
      <p
        v-for="(quantity, sizes) in selectedVariant.sizes"
        :key="sizes"
        :class="{
          selectedSize: sizes === selectedVariant.selectedSize,
          outOfStock: quantity === 0
        }"
        @click="handleSelectSize(sizes, quantity)"
      >
        {{ sizes }}
      </p>
    </div>

    <!-- CART BLOC -->
    <div class="cart-bloc">
      <button @click="handleAddtoCart">Ajouter au panier</button>

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
  margin-bottom: 10px;
}

.selected-color span {
  font-weight: normal;
}

/* IMG BLOC */
.img-bloc {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.img-bloc img {
  width: 60px;
  height: 70px;
  object-fit: cover;
}

.selectedImg {
  border: 2px solid var(--main-black);
}

/* ADVISE */
.advise {
  background-color: var(--light-grey);
  padding: 20px;
  margin-bottom: 10px;
}

/* SIZE */
.sizes-bloc {
  display: flex;
  gap: 10px;
  margin-bottom: 10px;
}

.sizes-bloc p {
  font-size: 16px;
  border: 1px solid var(--main-black);
  padding: 5px;
  width: 40px;
  height: 40px;
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
}

.outOfStock {
  opacity: 0.5;
}

.sizes-bloc .selectedSize {
  border-width: 2px;
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

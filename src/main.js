import './assets/main.css'

import { createApp } from 'vue'
import App from './App.vue'

////// Import fontawesome
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'

//// Import icons
import { faShoppingBag, faStar, faStarHalfAlt } from '@fortawesome/free-solid-svg-icons'

import { faUser, faHeart } from '@fortawesome/free-regular-svg-icons'

import {} from '@fortawesome/free-brands-svg-icons'

// Ajout à la librairie
library.add(faUser, faHeart, faShoppingBag, faStar, faStarHalfAlt)

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app')

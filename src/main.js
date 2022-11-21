import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
library.add(faBuilding)
library.add(faUsers)
library.add(faGlobe)
library.add(faSuitcase)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

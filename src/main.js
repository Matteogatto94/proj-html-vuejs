import { createApp } from 'vue'
import './assets/scss/style.scss'
import App from './App.vue'
import { library } from '@fortawesome/fontawesome-svg-core'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { faBuilding } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faGlobe } from '@fortawesome/free-solid-svg-icons'
import { faSuitcase } from '@fortawesome/free-solid-svg-icons'
import { faLightbulb } from '@fortawesome/free-solid-svg-icons'
import { faGear } from '@fortawesome/free-solid-svg-icons'
import { faHouseChimney } from '@fortawesome/free-solid-svg-icons'
import { faPhone } from '@fortawesome/free-solid-svg-icons'
import { faEnvelope } from '@fortawesome/free-solid-svg-icons'
import { faClock } from '@fortawesome/free-solid-svg-icons'
import { faTwitter } from '@fortawesome/free-brands-svg-icons'
import { faFacebookF } from '@fortawesome/free-brands-svg-icons'
import { faYoutube } from '@fortawesome/free-brands-svg-icons'
import { faInstagram } from '@fortawesome/free-brands-svg-icons'
import { faFolder } from '@fortawesome/free-solid-svg-icons'


library.add(faBuilding)
library.add(faUsers)
library.add(faGlobe)
library.add(faSuitcase)
library.add(faLightbulb)
library.add(faGear)
library.add(faHouseChimney)
library.add(faPhone)
library.add(faEnvelope)
library.add(faClock)
library.add(faTwitter)
library.add(faFacebookF)
library.add(faYoutube)
library.add(faInstagram)
library.add(faFolder)

createApp(App)
    .component('font-awesome-icon', FontAwesomeIcon)
    .mount('#app')

import { createApp } from 'vue';
import './style.css';
import App from './App.vue';
import router from './router/index.js';

/* import the fontawesome core */
import { library } from '@fortawesome/fontawesome-svg-core';

/* import font awesome icon component */
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';

/* import specific icons */
import { faUserSecret } from '@fortawesome/free-solid-svg-icons';
import { faClapperboard } from '@fortawesome/free-solid-svg-icons';
import { faArrowRight } from '@fortawesome/free-solid-svg-icons';
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import { faFilm } from '@fortawesome/free-solid-svg-icons';
import { faTv } from '@fortawesome/free-solid-svg-icons';
import { faBookmark as solidBookmark } from '@fortawesome/free-solid-svg-icons'; // Rename it to solidBookmark
import { faBookmark as regularBookmark } from '@fortawesome/free-regular-svg-icons'; // Rename it to regularBookmark
import { faSquare } from '@fortawesome/free-solid-svg-icons';
import { faMagnifyingGlass } from '@fortawesome/free-solid-svg-icons';

/* add icons to the library */
library.add(faUserSecret, faClapperboard, faFilm, solidBookmark, regularBookmark, faTv, faSquare, faMagnifyingGlass, faArrowRight, faArrowLeft);

// Create the app instance
const app = createApp(App);

// Use the router plugin
app.use(router);

// Register the global component for FontAwesome
app.component('font-awesome-icon', FontAwesomeIcon);

// Mount the app to the #app element
app.mount('#app');

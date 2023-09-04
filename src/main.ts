import { createApp } from 'vue';
import { library } from '@fortawesome/fontawesome-svg-core';
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome';
import { faBolt, faBrain, faEye, faComment } from '@fortawesome/free-solid-svg-icons';

import './style.css';
import App from './App.vue';

library.add(faBolt, faBrain, faEye, faComment);

createApp(App).component('font-awesome-icon', FontAwesomeIcon).mount('#app');


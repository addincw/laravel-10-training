import "./bootstrap";

import Alpine from "alpinejs";

import { createApp } from "vue";
import UserApp from "./Components/User.vue";

const userApp = createApp(UserApp);
userApp.mount("#user-app");

window.Alpine = Alpine;

Alpine.start();

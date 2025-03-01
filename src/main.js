import { createApp } from "vue";
import App from "./App.vue";
import router from "./router";
import store from "./store";
import 'handsontable/dist/handsontable.full.css';
import "./assets/css/nucleo-icons.css";
import "./assets/css/nucleo-svg.css";
import MaterialDashboard from "./material-dashboard";
import Toast, { POSITION } from "vue-toastification";
import "vue-toastification/dist/index.css";
import vueCookie from "vue3-cookies";

const appInstance = createApp(App);
const toastOptions = {
    position: POSITION.BOTTOM_CENTER,
    timeout: 3000,
    closeOnClick: true,
    pauseOnFocusLoss: true,
    pauseOnHover: true,
    draggable: true,
    draggablePercent: 0.6,
    showCloseButtonOnHover: false,
    hideProgressBar: true,
    closeButton: "button",
    icon: true,
    rtl: false,
};

appInstance.use(router);
appInstance.use(store);
appInstance.use(MaterialDashboard);
appInstance.use(Toast, toastOptions);
appInstance.use(vueCookie);
appInstance.mount("#app");
import toaster from "@meforma/vue-toaster"
import { createApp } from "vue"

import App from "./App.vue"
import "./assets/styles.css"
import { i18n } from "./localization/i18n"
import router from "./router"

const app = createApp(App)
app.use(router)
app.use(i18n)
app.use(toaster).provide("toast", app.config.globalProperties.$toast)
app.mount("#app")

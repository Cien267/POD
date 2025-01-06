import "./assets/css/main.css"
import { createApp } from "vue"
import { createPinia } from "pinia"
import { createNotivue } from "notivue"
import "notivue/notification.css"
import "notivue/animations.css"
import App from "./App.vue"
import router from "./router"

const notivue = createNotivue({
  position: "top-center",
  limit: 4,
  notifications: {
    global: {
      duration: 3000,
    },
  },
})
const app = createApp(App)

app.use(createPinia())
app.use(router)
app.use(notivue)

app.mount("#app")

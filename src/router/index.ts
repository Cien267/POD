import { createRouter, createWebHistory } from "vue-router"
import HomePage from "@/views/HomePage.vue"
import NotFoundPage from "@/views/NotFoundPage.vue"

const router = createRouter({
  history: createWebHistory(),
  routes: [
    {
      path: "/",
      name: "HomePage",
      component: HomePage,
    },

    { path: `/:notFound(.*)`, component: NotFoundPage },
  ],
})

export default router

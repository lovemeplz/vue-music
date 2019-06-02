import Vue from "vue"
import Router from "vue-router"

Vue.use(Router)

export default new Router({
  routes: [
    {
      path: "/",
      redirect: "/recommend"
    },
    {
      path: "/recommend",
      name: "Recommend",
      component: () => import("business/recommend"),
    },
    {
      path: "/singer",
      name: "Singer",
      component: () => import("business/singer"),
    },
    {
      path: "/rank",
      name: "Rank",
      component: () => import("business/rank"),
    },
    {
      path: "/search",
      name: "Search",
      component: () => import("business/search"),
    }
  ]
})
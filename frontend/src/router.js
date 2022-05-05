import { createWebHistory, createRouter } from "vue-router";
const routes = [{
    path: "/",
    alias: "/competences",
    name: "competences",
    component: () =>
        import ("./components/CompetenceList.vue")
}]
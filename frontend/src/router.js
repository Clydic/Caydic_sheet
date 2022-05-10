import { createWebHistory, createRouter } from "vue-router";
import MyCharacVue from "./components/MyCharac.vue";
const routes = [{
        path: "/character/competences",
        name: "competences",
        component: () =>
            import ("./components/CompetenceList")
    },
    {
        path: "/character/competences/:id",
        name: "competences-details",
        component: () =>
            import ("./components/Competence")
    },
    {
        path: "/character/competences/add",
        name: "add",
        component: () =>
            import ("./components/addCompetence")
    },
    {

        path: "/",
        alias: "/home",
        component: MyCharacVue
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;
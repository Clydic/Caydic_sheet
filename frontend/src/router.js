import { createWebHistory, createRouter } from "vue-router";
const routes = [{
        path: "/",
        alias: "/competences",
        name: "competences",
        component: () =>
            import ("./components/CompetenceList")
    },
    {
        path: "/competences/:id",
        name: "competences-details",
        component: () =>
            import ("./components/Competence")
    },
    {
        path: "/add",
        name: "add",
        component: () =>
            import ("./components/addCompetence")
    }
];
const router = createRouter({
    history: createWebHistory().routes,
});
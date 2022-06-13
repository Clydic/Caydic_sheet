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
        name: "add-competence",
        component: () =>
            import ("./components/addCompetence")
    },
    {

        path: "/",
        alias: "/home",
        component: MyCharacVue
    },
    {
        path: "/character/armes/add",
        name: "add-armes",
        component: () =>
            import ("./components/addArmes")
    },
    {
        path: "/character/armes",
        name: "armes",
        component: () =>
            import ("./components/ArmesList")
    },
    {
        path: "/character/armes/:id",
        name: "armes-details",
        component: () =>
            import ("./components/Armes")
    },
    {
        path: "/character/armors/add",
        name: "add-armors",
        component: () =>
            import ("./components/addArmors")
    },
    {
        path: "/character/armors",
        name: "armors",
        component: () =>
            import ("./components/ArmorsList")
    },
    {
        path: "/character/armors/:id",
        name: "armors-details",
        component: () =>
            import ("./components/Armors")
    }
];
const router = createRouter({
    history: createWebHistory(),
    routes,
});
export default router;

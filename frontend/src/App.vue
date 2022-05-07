<template>
  <div id="wrapper">
    <nav class="navbar navbar-expand navbar-dark bg-dark">
      <router-link to="/" class="navbar-brand">Clydic</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/competences" class="nav-link">Competence</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/add" class="nav-link">Ajouter</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>
    <div id="mycharac">
      <MyCharac/>
    </div>

  </div>
</template>
<script>
import MyCharac from "./components/MyCharac.vue";
export default {
    name: "app",
components: { MyCharac }
};
</script>


<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
 /*   text-align: center;*/
  color: #2c3e50;
  margin-top: 60px;
}
#mycharac{

  margin-left: 60px;
  margin-right: 60px;
}
</style>

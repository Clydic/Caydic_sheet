<template>
  <div id="wrapper">
    <header class="container">
        <h2>{{character_name}}</h2>
        <h3>{{age}}</h3>
        <p>{{classe}}</p>

    </header>

    <nav class="navbar navbar-expand navbar-dark bg-dark ">
      <router-link to="/home" class="navbar-brand">Caydic</router-link>
      <div class="navbar-nav mr-auto">
        <li class="nav-item">
          <router-link to="/character/competences" class="nav-link">Competence</router-link>
        </li>
        <li class="nav-item">
          <router-link to="/character/armes" class="nav-link">Armes</router-link>
        </li>
      </div>
    </nav>
    <div class="container mt-3">
      <router-view />
    </div>

  </div>
</template>
<script>
export default {
    name: "app",
    data(){
      return{
    character_name : "Caydic Croc-Blanc",
    age : "25 ans",
    classe : "Barbare",

      }

    }
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

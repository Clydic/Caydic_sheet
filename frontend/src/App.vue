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
        <li v-for="router of routers" :key="router" class="nav-item">
	<router-link :to="router.to" class="nav-link">{{router.link}}</router-link>
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
   routers:[
   {to:"/character/competences",link:"Compétences"},
   {to:"/character/armes",link:"Armes"},
   {to:"/character/armors",link:"Armors"},
   ],

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

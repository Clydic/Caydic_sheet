<template>
  <div class="submit-form">
  <h3>Ajouter une arme</h3>
    <div v-if="!submitted">
      <InputForms v-bind="props"/>
      <div class="form-group">
        <label for="name_arme">Nom de l'arme</label>
        <input
          type="text"
          class="form-control"
          id="name_arme"
          required
          v-model="arme.name_arme"
          name="name_arme"
        />
      </div>
      <div class="form-group">
        <label for="type_degat">Type de dégâts</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="arme.type_degat"
          name="type_degat"
        />
      </div>
      <div class="form-group">
        <label for="carac_arme">Catégory de l'Arme</label>
        <input
          class="form-control"
          id="carac_arme"
          required
          v-model="arme.category_arme"
          name="category_arme"
        />
      </div>
      <div class="form-group">
        <label for="nb_degat">Nombre de dégâts</label>
        <input
          class="form-control"
          id="nb_degat"
          required
          v-model="arme.nb_degat"
          name="nb_degat"
        />
      </div>
      <div class="form-group">
        <label for="prix_arme">Prix</label>
        <input
          class="form-control"
          id="prix_arme"
          required
          v-model="arme.prix_arme"
          name="prix_arme"
        />
      </div>
      <button @click="savearme" class="btn btn-success">Soummettre</button>
    </div>
    <div v-else>
      <h4>Vous avez soumis la requête avec succès</h4>
      <button class="btn btn-success m-1" @click="newarme">Ajouter</button>
      <router-link to="/character/armes" class="btn btn-info" >Liste des Armes</router-link>
    </div>
  </div>
</template>
<script>
import ArmeDataService from "../services/ArmeDataService";
import InputForms  from "./InputForms.vue";
export default {
  components : {
    InputForms
  },
  name: "add-arme",
  data() {
    return {
      arme: {
        id: null,
        name_arme: "",
        type_degat: "",
        category_arme: "",
        nb_degat:"",
        prix_arme:""
      },
      submitted: false,
      props:{
          name:"description",
          model:this.name_arme,
          title: "Description de l'arme" 
      }
    };
  },
  methods: {
    savearme() {
      var data = {
        name_arme: this.arme.name_arme,
        type_degat: this.arme.type_degat,
        category_arme:this.arme.category_arme ,
        nb_degat:this.arme.nb_degat,
        prix_arme: this.arme.prix_arme 
      };
      ArmeDataService.create(data)
        .then(response => {
          this.arme.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newarme() {
      this.submitted = false;
      this.arme = {};
    }
  }
};
</script>
<style>
.submit-form {
  max-width: 300px;
  margin: auto;
}
</style>

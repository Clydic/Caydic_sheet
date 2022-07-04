<template>
  <div class="submit-form">
<h3>Ajouter une compétence</h3>
    <div v-if="!submitted">
      <div class="form-group">
        <input
          type="text"
          class="form-control"
          id="name_competence"
          required
          v-model="competence.name_competence"
          name="name_competence"
          placeholder="Nom de la compétence"
        />
      </div>
      <div class="form-group">
        <select
          class="form-select"
          id="carac_competence"
          required
          v-model="competence.carac_competence"
          name="carac_competence"
        >
        <option disabled value="">Choisissez une caractéristique</option>
        <option v-for="carac in caracteristique" :value="carac.nom" :key="carac">{{carac.nom}}</option>
        </select>
      </div>
      <div class="form-group">
        <input
          class="form-control"
          id="description"
          required
          v-model="competence.description"
          name="description"
          placeholder="Description"
        />
         
      </div>
      <button @click="savecompetence" class="btn btn-success">Soummettre</button>
    </div>
    <div v-else>
      <h4>Vous avez soumis la requête avec succès</h4>
      <button class="btn btn-success m-1" @click="newcompetence">Ajouter</button>
      <router-link to="/character/competences" class="btn btn-info" >Liste des compétences</router-link>
    </div>
  </div>
</template>
<script>
import CompetenceDataService from "../services/CompetenceDataService.js";
var list_of_carac = require( "../assets/js/list_of_carac.js");
export default {
  name: "add-competence",
  data() {
    return {
      competence: {
        id: null,
        name_competence: "",
        description: "",
        carac_competence: ""
      },
      submitted: false,
      caracteristique : list_of_carac

    };
  },
  methods: {
    savecompetence() {
      var data = {
        name_competence: this.competence.name_competence,
        description: this.competence.description,
        carac_competence: this.competence.carac_competence
      };
      CompetenceDataService.create(data)
        .then(response => {
          this.competence.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newcompetence() {
      this.submitted = false;
      this.competence = {};
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

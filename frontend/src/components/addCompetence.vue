<template>
  <div class="submit-form">
<h3>Ajouter une compétence</h3>
    <div v-if="!submitted">
      <div class="form-group">
        <label for="name_competence">Nom de la compétence</label>
        <input
          type="text"
          class="form-control"
          id="name_competence"
          required
          v-model="competence.name_competence"
          name="name_competence"
        />
      </div>
      <div class="form-group">
        <label for="carac_competence">Caractéristique de la compétence</label>
        <input
          class="form-control"
          id="carac_competence"
          required
          v-model="competence.carac_competence"
          name="carac_competence"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input
          class="form-control"
          id="description"
          required
          v-model="competence.description"
          name="description"
        />
      </div>
      <button @click="savecompetence" class="btn btn-success">Soummettre</button>
    </div>
    <div v-else>
      <h4>Vous avez soumis la requête avec succès</h4>
      <button class="btn btn-success" @click="newcompetence">Ajouter</button>
    </div>
  </div>
</template>
<script>
import CompetenceDataService from "../services/CompetenceDataService";
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
      submitted: false
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

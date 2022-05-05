<template>
  <div v-if="currentCompetence" class="edit-form">
    <h4>Competence</h4>
    <form>
      <div class="form-group">
        <label for="name_competence">Nom</label>
        <input type="text" class="form-control" id="name_competence"
          v-model="currentCompetence.name_competence"
        />
      </div>
      <div class="form-group">
        <label for="carac_competence">Caractéristique</label>
        <input type="text" class="form-control" id="carac_competence"
          v-model="currentCompetence.carac_competence"
        />
      </div>
      <div class="form-group">
        <label for="description">Description</label>
        <input type="text" class="form-control" id="description"
          v-model="currentCompetence.description"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2"
      @click="deleteCompetence"
    >
      Delete
    </button>
    <button type="submit" class="badge badge-success"
      @click="updateCompetence"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Competence...</p>
  </div>
</template>
<script>
import CompetenceDataService from "../services/CompetenceDataService";
export default {
  name: "competence",
  data() {
    return {
      currentCompetence: null,
      message: ''
    };
  },
  methods: {
    getCompetence(id) {
      CompetenceDataService.get(id)
        .then(response => {
          this.currentCompetence = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateCompetence() {
      CompetenceDataService.update(this.currentCompetence.id_competence, this.currentCompetence)
        .then(response => {
          console.log(response.data);
          this.message = 'The competence was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteCompetence() {
      CompetenceDataService.delete(this.currentCompetence.id_competence)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "competences" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getCompetence(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>

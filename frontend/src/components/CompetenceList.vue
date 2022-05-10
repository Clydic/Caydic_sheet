<template>
    <div class="list row">
        <div class="col-md-8">
            <div class="input-group mb-3">
                <input type="text" placeholder="Search by name" v-model="name" class="form-control"/>
                <div class="input-group-append">
                    <button class="btn btn-outline-secondary" type="button" @click="searchName">
                        Chercher
                    </button>
                </div>
            </div>
        </div>
        <div class="col-md-6">
            <h4>Listes des Compétences</h4>
            <ul class="list-group">
                    <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(competence, index) in competences"
          :key="index"
          @click="setActiveCompetence(competence, index)">
          {{ competence.name_competence }}
        </li>
            </ul>
            <button class="m-3 btn-sm btn-danger" @click="removeAllCompetences">
                Remove All
            </button>
        </div>
        <div class="col-md-6">
            <div v-if="currentCompetence">
                <h4>Competence</h4>
                <div>
                    <label><strong>Name:</strong></label>{{currentCompetence.name_competence}}
                </div>
                <div>
                    <label><strong>Description:</strong></label>{{currentCompetence.description}}
                </div>
                <div>
                    <label><strong>Caractéristiques:</strong></label>{{currentCompetence.carac_competence}}
                </div>
                    <router-link :to="'/character/competences/' + currentCompetence.id_competence" class="badge badge-warning">Edit</router-link>
            </div>
            <div v-else>
                <p>Please click on a Competence...</p>
            </div>
        </div>
    </div>
</template>
<script>
import CompetenceDataService from "../services/CompetenceDataService";
export default {
  name: "competences-list",
  data() {
    return {
      competences: [],
      currentCompetence: null,
      currentIndex: -1,
      name_competence: ""
    };
  },
  methods: {
    retrieveCompetences() {
      CompetenceDataService.getAll()
        .then(response => {
          this.competences = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveCompetences();
      this.currentCompetence = null;
      this.currentIndex = -1;
    },
    setActiveCompetence(competence, index) {
      this.currentCompetence = competence;
      this.currentIndex = competence ? index : -1;
    },
    removeAllCompetences() {
      CompetenceDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchName() {
      CompetenceDataService.findByName(this.title)
        .then(response => {
          this.competences = response.data;
          this.setActiveCompetence(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveCompetences();
  }
};
</script>
<style>
.list {
  text-align: left;
  max-width: 750px;
  margin: auto;
}
</style>

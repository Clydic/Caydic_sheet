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
            <h4>Listes des Armes</h4>
            <ul class="list-group">
                    <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(arme, index) in armes"
          :key="index"
          @click="setActiveArme(arme, index)">
          {{ arme.name_competence }}
        </li>
            </ul>
            <button class="m-3 btn-sm btn-danger" @click="removeAllArmes">
                Remove All
            </button>
          <router-link to="/character/armes/add" class="btn btn-success ">Ajouter</router-link>
        </div>
        <div class="col-md-6">
            <div v-if="currentArme">
                <h4>Arme</h4>
                <div>
                    <label><strong>Nom:</strong></label>{{currentArme.name_arme}}
                </div>
                <div>
                    <label><strong>Type de dégâts:</strong></label>{{currentArme.type_degat}}
                </div>
                <div>
                    <label><strong>Catégorie de l'arme:</strong></label>{{currentArme.category_arme}}
                </div>
                <div>
                    <label><strong>Nombres de dégâts:</strong></label>{{currentArme.nb_degat}}
                </div>
                <div>
                    <label><strong>Prix:</strong></label>{{currentArme.prix_arme}}
                </div>
                    <router-link :to="'/character/armes/' + currentArme.id_armes" class="badge badge-warning">Edit</router-link>
            </div>
            <div v-else>
                <p>Please click on a Arme...</p>
            </div>
        </div>
    </div>
</template>
<script>
import ArmeDataService from "../services/ArmeDataService";
export default {
  name: "armes-list",
  data() {
    return {
      armes: [],
      currentArme: null,
      currentIndex: -1,
      name_arme: ""
    };
  },
  methods: {
    retrieveArmes() {
      ArmeDataService.getAll()
        .then(response => {
          this.armes = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    refreshList() {
      this.retrieveArmes();
      this.currentArme = null;
      this.currentIndex = -1;
    },
    setActiveArme(arme, index) {
      this.currentArme = arme;
      this.currentIndex = arme ? index : -1;
    },
    removeAllArmes() {
      ArmeDataService.deleteAll()
        .then(response => {
          console.log(response.data);
          this.refreshList();
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    searchName() {
      ArmeDataService.findByName(this.title)
        .then(response => {
          this.armes = response.data;
          this.setActiveArme(null);
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.retrieveArmes();
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

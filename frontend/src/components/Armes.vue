<template>
  <div v-if="currentArme" class="edit-form">
    <h4>Arme</h4>
    <form>
      <div class="form-group">
        <label for="name_arme">Nom</label>
        <input type="text" class="form-control" id="name_arme"
          v-model="currentArme.name_arme"
        />
      </div>
      <div class="form-group">
        <label for="type_degat">Type de dégât</label>
        <input type="text" class="form-control" id="type_degat"
          v-model="currentArme.type_degat"
        />
      </div>
      <div class="form-group">
        <label for="category_arme">Catégorie de l'arme</label>
        <input type="text" class="form-control" id="category_arme"
          v-model="currentArme.category_arme"
        />
      </div>
      <div class="form-group">
        <label for="nb_degat">Nombre de dégâts</label>
        <input type="text" class="form-control" id="nb_degat"
          v-model="currentArme.nb_degat"
        />
      </div>
      <div class="form-group">
        <label for="price">Prix</label>
        <input type="text" class="form-control" id="price"
          v-model="currentArme.price"
        />
      </div>
    </form>
    <button class="badge badge-danger mr-2"
      @click="deleteArme"
    >
      Delete
    </button>
    <button type="submit" class="badge badge-success"
      @click="updateArme"
    >
      Update
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p>Please click on a Arme...</p>
  </div>
</template>
<script>
import ArmeDataService from "../services/ArmeDataService";
export default {
  name: "MyArme",
  data() {
    return {
      currentArme: null,
      message: ''
    };
  },
  methods: {
    getArme(id) {
      ArmeDataService.get(id)
        .then(response => {
          this.currentArme = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateArme() {
      ArmeDataService.update(this.currentarme.id_arme, this.currentCompetence)
        .then(response => {
          console.log(response.data);
          this.message = 'The arme was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteArme() {
      ArmeDataService.delete(this.currentarme.id_arme)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "armes" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getArme(this.$route.params.id);
  }
};
</script>
<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>

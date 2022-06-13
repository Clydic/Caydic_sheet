<template>
  <div class="submit-form">
    <h3>Ajouter une Armure</h3>
    <div v-if="!submitted">
      <div v-for="line in forms_line" :key="line.id" class="form-group">
        <label for="line.id">{{line.label}}</label>
        <input
          type="text"
          class="form-control"
          id="line.id"
          required
          v-model="line.model"
          name="line.id"/> 
      </div>
      <button @click="savearme" class="btn btn-success">Soummettre</button>
    </div>
    <div v-else>
      <h4>Vous avez soumis la requête avec succès</h4>
      <button class="btn btn-success m-1" @click="newarmor">Ajouter</button>
      <router-link to="/character/armors" class="btn btn-info" >
        Liste des Armors
      </router-link>
    </div>
  </div>
</template>
<script>
import ArmorDataService from "../services/ArmorDataService";
export default {
  name: "add-armor",
  data() {
    return {
      armor: {
        id: null,
        name_armor: "",
        bonus_degat: "",
        category_armor: "",
        malus_dex:"",
        prix_armor:""
      },
      submitted: false,
      forms_line:[ 
        { id: "name_armor",
          model : "armor.name_armor",
          label : "Nom de l'armure",
        },
        { id: "bonus_ca",
          model : "armor.bonus_ca",
          label : "Bonus d'armure à la CA",
        },
        { id: "category_armor",
          model : "armor.category_armor",
          label : "Catégorie de l'armure",
        },
        { id: "malus_dex",
          model : "armor.malus_dex",
          label : "Malus à la Dextérité",
        },
        { id: "price_armor",
          model : "armor.price_armor",
          label : "Prix de l'armure",
        },
      ]
    };
  },
  methods: {
    savearmor() {
      var data = {
        name_armor: this.armor.name_armor,
        bonus_ca: this.armor.bonus_ca,
        category_armor:this.armor.category_armor ,
        malus_dex:this.armor.malus_dex,
        price_armor: this.armor.price_armor 
      };
      ArmorDataService.create(data)
        .then(response => {
          this.armor.id = response.data.id;
          console.log(response.data);
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    
    newarmor() {
      this.submitted = false;
      this.armor = {};
    }
  }
};

</script>
<style>
</style>

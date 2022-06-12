<template>
  <div class="submit-form">
    <h3>Ajouter une Armure</h3>
    <div v-if="!submitted">
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
    </div>
  </div>
</template>
<script>
import ArmeDataService from "../services/ArmeDataService";
import Form  from "Forms.vue";
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
</style>

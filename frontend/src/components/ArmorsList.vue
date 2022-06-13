<template>
   <div class="list row">
      <div class="col-md-8">
         <div class="input-group mb-3">
            <input type="text" placeholder="Search by name" v-model="name" class="form-control"/>
            <div class="input-group-append">
               <button
                  class="btn btn-outline-secondary" 
                  type="button" 
                  @click="searchName">
                     Chercher
               </button>
            </div>
         </div>
      </div>
      <div class="col-md-6">
         <h4>Listes des Armures</h4>
         <ul class="list-group">
            <li class="list-group-item"
            :class="{ active: index == currentIndex }"
            v-for="(armor, index) in armors"
            :key="index"
            @click="setActiveArmor(armor, index)">
               {{ armor.name_competence }}
            </li>
         </ul>
         <button class="m-3 btn-sm btn-danger" @click="removeAllArmors">
            Remove All
         </button>
         <router-link to="/character/armors/add" class="btn btn-success ">
            Ajouter
         </router-link>
      </div>
      <div class="col-md-6">
         <div v-if="currentArmor">
            <h4>Armor</h4>
            <div v-for="label in labels" :key="label">
               <label>
                  <strong>
                     {{label}}
                  </strong>
               </label>
               {{currentArmor.name_armor}}
            </div>
            <router-link 
            :to="'/character/armors/' + currentArmor.id_armors" 
            class="badge badge-warning">
               Edit
            </router-link>
         </div>
         <div v-else>
            <p>Please click on a Armor...</p>
         </div>
      </div>
   </div>
</template>
<script>
   import ArmorDataService from "../services/ArmorDataService";
      export default {
      name: "armors-list",
      data() {
         return {
            armors: [],
            currentArmor: null,
            currentIndex: -1,
            name_armor: "",
            labels:[
               "Nom",
               "Bonus à la CA",
               "Catégorie de l'armure" ,
               "Malus à la Dextérite",
               "Prix"  
               ],
         };
      },
      methods: {
         retrieveArmors() {
            ArmorDataService.getAll()
            .then(response => {
               this.armors = response.data;
               console.log(response.data);
            })
            .catch(e => {
               console.log(e);
            });
         },
         refreshList() {
            this.retrieveArmors();
            this.currentArmor = null;
            this.currentIndex = -1;
         },
         setActiveArmor(armor, index) {
            this.currentArmor = armor;
            this.currentIndex = armor ? index : -1;
         },
         removeAllArmors() {
            ArmorDataService.deleteAll()
            .then(response => {
            console.log(response.data);
            this.refreshList();
            })
            .catch(e => {
               console.log(e);
            });
         },

         searchName() {
            ArmorDataService.findByName(this.title)
            .then(response => {
               this.armors = response.data;
               this.setActiveArmor(null);
               console.log(response.data);
            })
            .catch(e => {
               console.log(e);
            });
         }
      },
      mounted() {
         this.retrieveArmors();
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

<template>
  <div>
    <h4>
      <form>
        <div class="form-group">
          <label for="item.id">{{item.label}}</label>
          <input id="item.id" 
            class="form-control" 
            type="text" 
            v-model="currentArmor.item.id"/> 
        </div>
      </form>
    </h4>
  </div>
</template>
<script>
import ArmorDataService from "../services/ArmorDataService";
export default {
  name: "MyArmor",
  data() {
    return {
      currentArmor: null,
      message: ''
    };
  },
  methods: {
    getArmor(id) {
      ArmorDataService.get(id)
        .then(response => {
          this.currentArmor = response.data;
          console.log(response.data);
        })
        .catch(e => {
          console.log(e);
        });
    },
    updateArmor() {
      ArmorDataService.update(
        this.currentArmor.id_armor,
        this.currentCompetence
      ) .then(response => {
          console.log(response.data);
          this.message = 'The armor was updated successfully!';
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteArmor() {
      ArmorDataService.delete(this.currentarmor.id_armor)
        .then(response => {
          console.log(response.data);
          this.$router.push({ name: "armors" });
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getArmor(this.$route.params.id);
  }
};
  
</script>
<style >
  
</style>

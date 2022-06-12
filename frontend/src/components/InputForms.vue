<template>
      <div class="form-group">
        <label for="name_arme">{{title}}</label>
        <input
          type="text"
          class="form-control"
          :id="name"
          required
          v-model="title"
          :name="name"
        />
      </div>
</template>
<script>
export default {
  props: {
    name: String,
    objet: String, 
    title:String }
}
</script>

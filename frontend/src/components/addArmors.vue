<template>
  <div class="submit-form">
    <h3>Ajouter {{title}}</h3>
  </div>
      <div class="form-group">
        <label for="carac_arme">Catégory de l'Arme</label>
        <input
          class="form-control"
          id="carac_arme"
          required
          v-model="arme.category_arme"
          name="category_arme"
        />
      </div>
</template>
<script></script>
<style>
</style>

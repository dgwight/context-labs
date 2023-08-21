<script>
export default {
  emits: ["update:search", "toggleFilters"],
};
</script>

<template>
  <v-app-bar color="blue" :elevation="0">
    <v-text-field
      hide-details
      placeholder="Search clients"
      prepend-inner-icon="mdi-magnify"
      variant="solo"
      class="ml-4 mr-1 search-bar"
      density="compact"
      clearable
      @update:model-value="$emit('update:search', $event)"
    ></v-text-field>

    <v-app-bar-nav-icon
      variant="text"
      icon="mdi-filter"
      @click.stop="$emit('toggleFilters')"
    ></v-app-bar-nav-icon>
  </v-app-bar>
</template>

<style scoped>
.search-bar {
  max-width: 400px;
}
</style>

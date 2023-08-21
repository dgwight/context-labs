<script>
export default {
  props: {
    client: {
      type: Object,
      default: null,
    },
  },
  emits: ["update:client"],
};
</script>

<template>
  <div v-if="client">
    <v-btn
      icon="mdi-close"
      class="float-right"
      @click="$emit('update:client', null)"
    ></v-btn>

    <v-avatar :image="client.avatar" size="128"></v-avatar>
    <br />
    <h2>
      <sanitized-html :html="client.name" />
    </h2>
    <p class="client-title">{{ client.title }}</p>
    <p v-if="client.nationality" class="mt-2">
      <v-icon icon="mdi-earth" size="sm" class="mb-1"></v-icon>
      {{ client.nationality }}
    </p>
    <p v-if="client.quote" class="mt-2">&#8220;{{ client.quote }}&#8221;</p>
  </div>
</template>

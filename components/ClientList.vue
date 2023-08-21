<script>
export default {
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["selectClient"],
};
</script>

<template>
  <v-card v-if="clients.length" class="mx-4 my-4">
    <v-list lines="two">
      <v-list-item
        v-for="(client, i) in clients"
        :key="i"
        :value="client"
        :prepend-avatar="client.avatar"
        @click="$emit('selectClient', client)"
      >
        <v-list-item-title>
          <sanitized-html :html="client.name" />
        </v-list-item-title>
        <v-list-item-subtitle>
          {{ client.title }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

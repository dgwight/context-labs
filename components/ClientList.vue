<script>
  import sanitizeHtml from 'sanitize-html'

  export default {
    props: {
      clients: {
        type: Array,
        default: () => []
      },
      client: {
        type: Object,
        default: null
      }
    },
    methods: {
      sanitize (html) {
        return sanitizeHtml(html)
      }
    }
  }
</script>

<template>
  <v-card class="mx-4 my-4" v-if="clients.length">
    <v-list lines="two">
      <v-list-item
          v-for="(client, i) in clients"
          :key="i"
          :value="client"
          :prepend-avatar="client.avatar"
          @click="$emit('selectClient', client)">
        <v-list-item-title v-html="sanitize(client.name)"></v-list-item-title>
        <v-list-item-subtitle>
          {{ client.title }}
        </v-list-item-subtitle>
      </v-list-item>
    </v-list>
  </v-card>
</template>

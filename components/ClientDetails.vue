<script>
  import sanitizeHtml from 'sanitize-html'

  export default {
    props: {
      client: {
        type: Object,
        default: null,
      }
    },
    data () {
      return {
        drawer: false
      }
    },
    watch: {
      client () {
        this.drawer = !!this.client
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
  <v-navigation-drawer v-model="drawer" class="py-4 px-4" location="right" width="300" permanent>
    <div v-if="client">
      <v-avatar :image="client.avatar" size="128"></v-avatar>
      <br>
      <h2 v-html="sanitize(client.name)"></h2>
      <p class="">{{ client.title }}</p>
      <p v-if="client.nationality" class="mt-2">
        <v-icon icon="mdi-earth" size="sm" class="mb-1"></v-icon>
        {{ client.nationality }}
      </p>
      <p class="mt-2" v-if="client.quote">&#8220;{{ client.quote }}&#8221;</p>
    </div>
  </v-navigation-drawer>
</template>

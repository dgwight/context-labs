<script>
  import { filter, includes, uniq, has } from 'lodash'
  import sanitizeHtml from 'sanitize-html'

  export default {
    data () {
      return {
        clients: [],
        keys: ['Name', 'Title', 'Quote', 'Nationality'],
        nationalities: [],
        titles: [],
        quotes: [],
        drawer: null,
        search: '',
        selectedClient: false
      }
    },
    computed: {
      filteredClients () {
        return filter(this.clients, (c) => {
          const matchesName = this.search.length
            ? includes(c.name.toLowerCase(), this.search.toLowerCase())
            : true
          const matchesTitle = this.titles.length
            ? includes(this.titles, c.title)
            : true
          const matchesNationality = this.nationalities.length
            ? includes(this.nationalities, c.nationality) || ('Undefined' && !has(c, 'nationality'))
            : true
          const matchesQuote = this.quotes.length
            ? includes(this.quotes, c.quote) || ('Undefined' && !has(c, 'nationality'))
            : true
          return matchesName && matchesNationality && matchesTitle && matchesQuote
        })
      },
      nationalityOptions () {
        return uniq(this.clients.map((c) => c.nationality || 'Undefined')).sort()
      },
      titleOptions () {
        return uniq(this.clients.map((c) => c.title || 'Undefined')).sort()
      },
      quoteOptions () {
        return uniq(this.clients.map((c) => c.quote || 'Undefined')).sort()
      }
    },
    created () {
      this.getPosts()
    },
    methods: {
      async getPosts () {
        this.clients = await $fetch('/api/clients')
      },
      sanitize (html) {
        return sanitizeHtml(html)
      }
    }
  }
</script>

<template>
  <v-app>
    <v-layout>
      <v-navigation-drawer v-model="drawer" class="py-4">
        <v-combobox
            label="Title"
            :items="titleOptions"
            v-model="titles"
            class="mx-4"
            multiple
            clearable
        ></v-combobox>

        <v-combobox
            label="Nationality"
            :items="nationalityOptions"
            v-model="nationalities"
            class="mx-4"
            multiple
            clearable
            chips
        ></v-combobox>

        <v-combobox
            label="Quote"
            :items="quoteOptions"
            v-model="quotes"
            class="mx-4"
            multiple
            clearable
        ></v-combobox>
      </v-navigation-drawer>

      <v-app-bar color="blue" :elevation="0">
        <v-text-field
            hide-details
            placeholder="Search clients"
            prepend-inner-icon="mdi-magnify"
            variant="solo"
            class="ml-4 mr-1"
            clearable
            density="compact"
            v-model="search"
            style="max-width: 400px;"
        ></v-text-field>

        <v-app-bar-nav-icon
            variant="text"
            icon="mdi-filter"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>
      </v-app-bar>

      <v-main>
        <v-card class="mx-4 my-4" v-if="filteredClients.length">
          <v-list lines="two">
            <v-list-item
                v-for="(client, i) in filteredClients"
                :key="i"
                :value="client"
                :prepend-avatar="client.avatar"
                @click="selectedClient = client"
            >
              <v-list-item-title v-html="sanitize(client.name)"></v-list-item-title>
              <v-list-item-subtitle>
                {{ client.title }}
              </v-list-item-subtitle>
            </v-list-item>
          </v-list>
        </v-card>
      </v-main>

      <v-navigation-drawer v-model="selectedClient" class="py-4 px-4" location="right" width="300">
        <v-avatar :image="selectedClient.avatar" size="128"></v-avatar>
        <br>
        <h1 v-html="sanitize(selectedClient.name)"></h1>
        <h3>{{ selectedClient.title }}</h3>
        <p>{{ selectedClient.nationality }}</p>
        <p>{{ selectedClient.quote }}</p>
      </v-navigation-drawer>
    </v-layout>
  </v-app>
</template>

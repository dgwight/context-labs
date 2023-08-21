<script>
  import { filter, includes, uniq } from 'lodash'

  export default {
    data () {
      return {
        clients: [],
        keys: ['Name', 'Title', 'Quote', 'Nationality'],
        nationalities: [],
        titles: [],
        quotes: [],
        drawer: true
      }
    },
    computed: {
      filteredClients () {
        return filter(this.clients, (c) => {
          const matchesTitle = this.titles.length
            ? includes(this.titles, c.title)
            : true
          const matchesNationality = this.nationalities.length
            ? includes(this.nationalities, c.nationality)
            : true
          const matchesQuote= this.quotes.length
            ? includes(this.quotes, c.quote)
            : true
          return matchesNationality && matchesTitle && matchesQuote
        })
      },
      nationalityOptions () {
        return uniq(this.clients.map((c) => c.nationality)).sort()
      },
      titleOptions () {
        return uniq(this.clients.map((c) => c.title)).sort()
      },
      quoteOptions () {
        return uniq(this.clients.map((c) => c.quote)).sort()
      }
    },
    created () {
      this.getPosts()
    },
    methods: {
      async getPosts () {
        this.clients = await $fetch('/api/clients')
      }
    }
  }
</script>

<template>
  <v-app>
    <v-layout class="rounded rounded-md">
      <v-app-bar color="primary">
        <v-app-bar-nav-icon
            variant="text"
            icon="mdi-filter"
            @click.stop="drawer = !drawer"
        ></v-app-bar-nav-icon>

        <v-toolbar-title>Clients</v-toolbar-title>
      </v-app-bar>

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

      <v-main>
        <v-card class="mx-4 my-4">
          <v-list lines="two">
            <v-list-item
                v-for="(client, i) in filteredClients"
                :key="i"
                :title="client.name"
                :value="client"
                :subtitle="client.title"
                :prepend-avatar="client.avatar"
            >
            </v-list-item>
          </v-list>
        </v-card>
      </v-main>
    </v-layout>
  </v-app>
</template>

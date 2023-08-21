<script>
  import { filter, includes, has } from 'lodash'
  import ClientDetails from '../components/ClientDetails.vue'
  import ClientList from '../components/ClientList.vue'
  import FiltersSidebar from '../components/FiltersSidebar.vue'
  import AppHeader from '../components/AppHeader.vue'

  export default {
    components: { AppHeader, FiltersSidebar, ClientList, ClientDetails },
    data () {
      return {
        clients: [],
        nationalities: [],
        titles: [],
        quotes: [],
        showFilters: null,
        search: '',
        selectedClient: null
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
    <v-layout>
      <v-navigation-drawer v-model="showFilters" class="py-4">
        <filters-sidebar
            :clients="clients"
            v-model:titles="titles"
            v-model:nationalities="nationalities"
            v-model:quotes="quotes"/>
      </v-navigation-drawer>
      <app-header v-model:search="search" @toggleFilters="showFilters = !showFilters"/>
      <v-main>
        <client-list :clients="filteredClients" @selectClient="(client) => selectedClient = client"/>
      </v-main>
      <client-details :client="selectedClient"/>
    </v-layout>
  </v-app>
</template>

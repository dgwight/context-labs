<script>
import { filter, includes, has } from "lodash";
import ClientDetails from "../components/ClientDetails.vue";
import ClientList from "../components/ClientList.vue";
import FiltersSidebar from "../components/FiltersSidebar.vue";
import AppHeader from "../components/AppHeader.vue";

export default {
  components: { AppHeader, FiltersSidebar, ClientList, ClientDetails },
  data() {
    return {
      clients: [],
      nationalities: [],
      titles: [],
      quotes: [],
      showFilters: null,
      search: "",
      selectedClient: null,
      showDetails: false,
    };
  },
  computed: {
    filteredClients() {
      return filter(this.clients, (c) => {
        const matchesName = this.search.length
          ? includes(c.name.toLowerCase(), this.search.toLowerCase())
          : true;
        const matchesTitle = this.titles.length
          ? includes(this.titles, c.title)
          : true;
        const matchesNationality = this.nationalities.length
          ? includes(this.nationalities, c.nationality) ||
            ("Undefined" && !has(c, "nationality"))
          : true;
        const matchesQuote = this.quotes.length
          ? includes(this.quotes, c.quote) ||
            ("Undefined" && !has(c, "nationality"))
          : true;
        return (
          matchesName && matchesNationality && matchesTitle && matchesQuote
        );
      });
    },
  },
  watch: {
    selectedClient() {
      this.showDetails = !!this.selectedClient;
    },
  },
  created() {
    this.getPosts();
  },
  methods: {
    async getPosts() {
      this.clients = await $fetch("/api/clients");
    },
  },
};
</script>

<template>
  <v-app>
    <v-layout>
      <app-header
          v-model:search="search"
          @toggle-filters="showFilters = !showFilters"
      />

      <v-navigation-drawer v-model="showFilters" class="py-4">
        <filters-sidebar
          v-model:titles="titles"
          v-model:nationalities="nationalities"
          v-model:quotes="quotes"
          :clients="clients"
        />
      </v-navigation-drawer>

      <v-main>
        <client-list
          :clients="filteredClients"
          @select-client="(client) => (selectedClient = client)"
        />
      </v-main>
      <v-navigation-drawer
        v-model="showDetails"
        class="py-4 px-4"
        location="right"
        width="400"
        permanent
      >
        <client-details v-model:client="selectedClient" />
      </v-navigation-drawer>
    </v-layout>
  </v-app>
</template>

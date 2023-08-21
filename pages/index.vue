<script>
  import { filter, includes, uniq } from 'lodash'

  export default {
    data () {
      return {
        clients: [],
        keys: [
          'Name',
          'Title',
          'Quote',
          'Nationality'
        ],
        nationalities: [],
        drawer: true
      }
    },
    created () {
      this.getPosts()
    },
    computed: {
      filteredClients () {
        return filter(this.clients, (c => {
          const matchesNationality = this.nationalities.length ? includes(this.nationalities, c.nationality) : true
          const matchesTitle = this.nationalities.length ? includes(this.nationalities, c.nationality) : true
          return matchesNationality && matchesTitle
        }))
      },
      nationalityOptions () {
        return uniq(this.clients.map(c => c.nationality)).sort()
      }
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
        <v-app-bar-nav-icon variant="text" icon="mdi-filter" @click.stop="drawer = !drawer"></v-app-bar-nav-icon>

        <v-toolbar-title>Clients</v-toolbar-title>
      </v-app-bar>

      <v-navigation-drawer v-model="drawer">
        <v-list>
          <v-list-item title="Filters"></v-list-item>

          <v-text-field clearable class="mx-3 mt-3" label="Name" variant="underlined"></v-text-field>

          <v-text-field clearable class="mx-4" label="Quote" variant="underlined"></v-text-field>

          <v-list density="compact">
            <v-list-subheader>Nationality</v-list-subheader>

            <v-list-item v-for="nationality in nationalityOptions" :key="nationality">
              <template v-slot:prepend="{ isActive }">
                <v-list-item-action start>
                  <v-checkbox-btn v-model="nationalities" :value="nationality"></v-checkbox-btn>
                </v-list-item-action>
              </template>
              <v-list-item-title>{{ nationality || 'None' }}</v-list-item-title>
            </v-list-item>
          </v-list>
        </v-list>
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
                :prepend-avatar="client.avatar">
            </v-list-item>
          </v-list>
        </v-card>
      </v-main>
    </v-layout>
  </v-app>
</template>

<style scoped>

</style>

<script>
  import { uniq } from 'lodash'

  export default {
    props: {
      clients: {
        type: Array,
        default: () => []
      },
      client: {
        type: Object,
        default: null
      },
      showFilters: {
        type: Boolean,
        default: null
      }
    },
    methods: {
      selectClient (client) {
        this.$emit('selectClient', client)
      }
    },
    computed: {
      nationalityOptions () {
        return uniq(this.clients.map((c) => c.nationality || 'Undefined')).sort()
      },
      titleOptions () {
        return uniq(this.clients.map((c) => c.title || 'Undefined')).sort()
      },
      quoteOptions () {
        return uniq(this.clients.map((c) => c.quote || 'Undefined')).sort()
      }
    }
  }
</script>

<template>
  <div>
    <v-combobox
        label="Title"
        :items="titleOptions"
        @update:modelValue="$emit('update:titles', $event)"
        class="mx-4"
        multiple
        clearable
    ></v-combobox>

    <v-combobox
        label="Nationality"
        :items="nationalityOptions"
        @update:modelValue="$emit('update:nationalities', $event)"
        class="mx-4"
        multiple
        clearable
        chips
    ></v-combobox>

    <v-combobox
        label="Quote"
        :items="quoteOptions"
        @update:modelValue="$emit('update:quotes', $event)"
        class="mx-4"
        multiple
        clearable
    ></v-combobox>
  </div>
</template>

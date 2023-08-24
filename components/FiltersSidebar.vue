<script>
import _ from "lodash";

export default {
  props: {
    // the clients list is used to give dynamic options for the filters
    clients: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["update:titles", "update:nationalities", "update:quotes"],
  methods: {
    optionsForProperty(property) {
      return _.uniq(this.clients.map((c) => c[property] || "Undefined")).sort();
    }
  },
  computed: {
    nationalityOptions() {
      return this.optionsForProperty('nationality');
    },
    titleOptions() {
      return this.optionsForProperty('title');
    },
    quoteOptions() {
      return this.optionsForProperty('quote');
    },
  },
};
</script>

<template>
  <div>
    <v-combobox
      label="Title"
      :items="titleOptions"
      class="mx-4"
      multiple
      clearable
      @click:clear="$emit('update:titles', [])"
      @update:model-value="$emit('update:titles', $event)"
    ></v-combobox>

    <v-combobox
      label="Nationality"
      :items="nationalityOptions"
      class="mx-4"
      multiple
      clearable
      @click:clear="$emit('update:nationalities', [])"
      @update:model-value="$emit('update:nationalities', $event)"
    ></v-combobox>

    <v-combobox
      label="Quote"
      :items="quoteOptions"
      class="mx-4"
      multiple
      clearable
      @click:clear="$emit('update:quotes', [])"
      @update:model-value="$emit('update:quotes', $event)"
    ></v-combobox>
  </div>
</template>

<script>
import _ from "lodash";

export default {
  props: {
    clients: {
      type: Array,
      default: () => [],
    },
  },
  emits: ["update:titles", "update:nationalities", "update:quotes"],
  computed: {
    nationalityOptions() {
      return _.uniq(this.clients.map((c) => c.nationality || "Undefined")).sort();
    },
    titleOptions() {
      return _.uniq(this.clients.map((c) => c.title || "Undefined")).sort();
    },
    quoteOptions() {
      return _.uniq(this.clients.map((c) => c.quote || "Undefined")).sort();
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
      @update:model-value="$emit('update:titles', $event)"
    ></v-combobox>

    <v-combobox
      label="Nationality"
      :items="nationalityOptions"
      class="mx-4"
      multiple
      clearable
      chips
      @update:model-value="$emit('update:nationalities', $event)"
    ></v-combobox>

    <v-combobox
      label="Quote"
      :items="quoteOptions"
      class="mx-4"
      multiple
      clearable
      @update:model-value="$emit('update:quotes', $event)"
    ></v-combobox>
  </div>
</template>

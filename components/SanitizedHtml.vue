<script>
import sanitizeHtml from "sanitize-html";

export default {
  props: {
    html: {
      type: String,
      default: null,
    },
  },
  computed: {
    sanitizedHtml() {
      // protects against XSS attacks
      return sanitizeHtml(this.html);
    },
  },
};
</script>

<template>
  <!--eslint-disable-next-line vue/no-v-html -->
  <span v-html="sanitizedHtml" />
</template>

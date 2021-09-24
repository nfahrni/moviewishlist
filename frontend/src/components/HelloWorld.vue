<template>
  <div class="hello">
    <h1>{{ msg }}</h1>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from "vue";

export default defineComponent({
  name: "hello world",
  props: {
    msg: {
      required: true,
      type: String as PropType<string>,
    },
  },
});
</script>

<style scoped></style>

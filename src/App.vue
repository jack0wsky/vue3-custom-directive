<template>
  <div v-hello="{ text: 'Jacek' }" @custom-event="listener">
    {{ sayHello }}
  </div>
</template>

<script lang="ts">
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "App",

  setup() {
    const sayHello = ref("");
    const listener = ($value: string) => {
      sayHello.value = $value;
    };

    const test = ($value: string) => console.log($value);

    return {
      listener,
      test,
      sayHello,
    };
  },
});
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

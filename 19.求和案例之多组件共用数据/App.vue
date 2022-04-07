<template>
  <div id="app">
    <Sum />
    <hr />

    <Person />
  </div>
</template>

<script>
import Sum from "./components/Sum.vue";
import Person from "./components/Person.vue";

export default {
  name: "App",
  components: { Sum, Person },
};
</script>

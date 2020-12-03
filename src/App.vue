<template>
  <div>
    <Header />
    <b-card
      v-if="$route.meta.title"
      no-body
      class="text-center pt-5"
      style="height: 150px"
    >
      <h3>{{ $route.meta.title }}</h3>
    </b-card>
    <div class="container">
      <router-view />
    </div>
  </div>
</template>

<script lang="ts">
import { Component, Vue } from "vue-property-decorator";
import Header from "./layout/header/header.vue";

@Component({
  components: {
    Header,
  },
})
export default class App extends Vue {}
</script>

<style>
body {
  height: 100%;
  background-color: #f8f9fa !important;
}
</style>
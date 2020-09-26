<template>
  <!-- App.vue -->

  <v-app>
    <side-bar />
    <header-bar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <p>How are you?</p>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <footer-stuff />
  </v-app>
</template>

<script>
import HeaderBar from "./components/HeaderBar";
import SideBar from "./components/SideBar";
import FooterStuff from "./components/FooterStuff";

export default {
  name: "App",

  components: {
    HeaderBar,
    SideBar,
    FooterStuff,
  },

  data: () => ({
    //showPassword: false
  }),
};
</script>

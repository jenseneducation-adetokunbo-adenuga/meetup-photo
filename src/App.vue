<template>
  <!-- App.vue -->

  <v-app>
    <side-bar />
    <nav-bar />
    
    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <!-- <p>How are you?</p> -->
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <footer-stuff />
  </v-app>
</template>

<script>

import NavBar from "./components/NavBar";
import SideBar from "./components/SideBar";
import FooterStuff from "./components/FooterStuff";

export default {
  name: "App",

  components: {
    NavBar,
    SideBar,
    FooterStuff,
  },

  data: () => ({
    //showPassword: false
  }),
};
</script>

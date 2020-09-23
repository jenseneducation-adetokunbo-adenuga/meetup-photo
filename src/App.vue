<template>
  <!-- App.vue -->

  <v-app>
    <SideBar />
    <HeaderBar />

    <!-- Sizes your content based upon application components -->
    <v-main>
      <!-- Provides the application the proper gutter -->
      <v-container fluid>
        <p>How are you?</p>
        <!-- If using vue-router -->
        <router-view></router-view>
      </v-container>
    </v-main>

    <FooterStuff />
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

<template>
  <!-- App.vue -->

<v-app>
  <SideBar/>

  <v-app-bar app>
    <!-- -->
  </v-app-bar>

  <!-- Sizes your content based upon application components -->
  <v-main>

    <!-- Provides the application the proper gutter -->
    <v-container fluid>

      <!-- If using vue-router -->
      <router-view></router-view>
    </v-container>
  </v-main>

  <v-footer app>
    
  </v-footer>
</v-app>

</template>

<script>
//import HelloWorld from "./components/HelloWorld";
import SideBar from "./components/SideBar"

export default {
  name: "App",

  components: {
	//HelloWorld,
	SideBar,
  },

  data: () => ({
   //showPassword: false
  }),
};
</script>

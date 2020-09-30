<template>
  <v-container>
    <v-app-bar app>
      <v-toolbar-title>Photo Meetups</v-toolbar-title>
      <!-- --><v-spacer
      ></v-spacer>

      <span class="hidden-sm-and-up">
        <v-btn>Menu</v-btn>
      </span>
      <v-toolbar-items class="hidden-xs-only">
        <v-btn to="/" text>
          <v-icon small left>mdi-home</v-icon>
          Home
        </v-btn>

        <v-btn to="SingleEvent" text>
          <v-icon small left>mdi-domain</v-icon>
          Event
        </v-btn>
        <v-btn to="ReviewPage" text>
          <v-icon small left>mdi-pencil</v-icon>
          Review
        </v-btn>
        <v-btn to="About" text>
          <v-icon small left>mdi-book</v-icon>
          About
        </v-btn>
      </v-toolbar-items>
    </v-app-bar>
    <v-navigation-drawer v-model="drawer" absolute temporary right>
      Hi there
    </v-navigation-drawer>
  </v-container>
</template>

<script>
export default {
  name: "HeaderBar",

  data: () => ({
    drawer: false,
    //
  }),
};
</script>

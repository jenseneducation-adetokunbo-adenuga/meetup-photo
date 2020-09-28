<template>
  <div class="home">
    <!--<ul
      v-for="event in getAllEvents"
      v-bind:event="event"
      v-bind:key="event.id"
    >
      <li>
        Name of Event:
        {{ event.name }}
      </li>
      <li>
        Location of Event:
        {{ event.location }}
      </li>
      <li>
        Id:
        {{ event.id }}
      </li>
    </ul>-->

    <v-app id="inspire">
      <v-container class="fill-height" fluid style="min-height: 434px">
        <v-col
          cols="6"
          justify-content="center"
          v-for="event in getAllEvents"
          v-bind:event="event"
          v-bind:key="event.id"
        >
          <v-card :loading="loading" class="mx-3 my-5" max-width="500">
            <template slot="progress">
              <v-progress-linear
                color="deep-purple"
                height="10"
                indeterminate
              ></v-progress-linear>
            </template>

            <v-img height="250" src="">{{ event.image }}</v-img>

            <v-card-title>{{ event.name }}</v-card-title>

            <v-card-text>
              <v-row align="center" class="mx-0">
                <div class="grey--text ml-4">
                  4.5 (413)
                </div>
              </v-row>

              <div class="my-4 subtitle-1">
                {{ event.location }}
              </div>

              <div>
                {{ event.details }}
              </div>
            </v-card-text>

            <v-divider class="mx-4"></v-divider>

            <v-card-title>Tonight's availability</v-card-title>

            <v-card-text>
              <v-chip-group
                v-model="selection"
                active-class="deep-purple accent-4 white--text"
                column
              >
                <v-chip>5:30PM</v-chip>

                <v-chip>7:30PM</v-chip>

                <v-chip>8:00PM</v-chip>

                <v-chip>9:00PM</v-chip>
              </v-chip-group>
            </v-card-text>

            <v-card-actions>
              <v-btn color="deep-purple lighten-2" text @click="reserve">
                Reserve
              </v-btn>
            </v-card-actions>
          </v-card>
        </v-col>
      </v-container>
    </v-app>

    <!-- <ul
      v-for="event in getAllEvents"
      v-bind:event="event"
      v-bind:key="event.id"
    >
      <v-col cols="4">
        <v-card elevation="7" shaped>
          <h1>{{ event.location }}</h1>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Culpa natus
            voluptatibus beatae repellat excepturi minima et maxime sequi?
            Placeat illum architecto nesciunt at tempore porro modi hic!
            Suscipit, natus amet.
          </p>
          <v-btn color="warning" fab dark>
            <v-icon>mdi-account-circle</v-icon>
          </v-btn>
        </v-card>
      </v-col>
    </ul> -->
  </div>
</template>

<script>
// @ is an alias to /src

export default {
  name: "Home",
  components: {},

  data: () => ({
    loading: false,
    selection: 1,
  }),
  computed: {
    getAllEvents() {
      return this.$store.state.events;
    },
  },
  created() {
    this.$store.dispatch("getData");
  },
  methods: {
    reserve() {
      this.loading = true;

      setTimeout(() => (this.loading = false), 2000);
    },
  },
};
</script>

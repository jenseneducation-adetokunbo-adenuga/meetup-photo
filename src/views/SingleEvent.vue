<template>
  <div class="SinglePage">
    <v-app id="inspire">
      <v-container class="mx-auto my-12" max-width="374">
        <v-row>
          <v-col align="center" justify="space-around">
            <v-card class="mx-3 my-5" max-width="1000" elevation="2" shaped>
              <v-img height="650" src="../assets/beer.png"></v-img>

              <v-card-title>Selected Event</v-card-title>

              <v-card-text>
                <v-row align="center" class="mx-0">
                  <div class="grey--text ml-4">
                    Place Holder
                  </div>
                </v-row>

                <div class="my-4 subtitle-1">
                  Stockholm
                </div>

                <div>
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Nostrum asperiores architecto nulla, amet mollitia aspernatur,
                  provident quam, laudantium assumenda rerum explicabo eos
                  tenetur vero est. Laboriosam quo est adipisci optio.
                </div>
              </v-card-text>

              <v-divider class="mx-4"></v-divider>

              <v-card-title>No. of Seats available</v-card-title>

              <v-card-text> </v-card-text>

              <v-card-actions>
                <v-btn color="success" @click="reserve">
                  Reserve
                </v-btn>
                <v-spacer></v-spacer>
                <v-btn color="error" @click="reserve">
                  Return
                </v-btn>
              </v-card-actions>
            </v-card>
          </v-col>
        </v-row>
      </v-container>
    </v-app>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss" scoped></style>

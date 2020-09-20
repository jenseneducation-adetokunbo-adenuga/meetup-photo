<template>
  <v-app>
	<HelloWorld/>
	<v-card>
		<v-card-title>
			<h1 class="display-1">Login</h1>
		</v-card-title>
		<v-card-text>
			<v-form>
				<v-text-field label="Username"/>
				<v-text-field type="password" label="Password"/>
			</v-form>
		</v-card-text>
		<v-vard-actions>
			<v-btn>Register</v-btn>
			<v-btn>Login</v-btn>
		</v-vard-actions>
	</v-card>
  </v-app>
</template>

<script>
import HelloWorld from "./components/HelloWorld";

export default {
  name: "App",

  components: {
    HelloWorld,
  },

  data: () => ({
    //
  }),
};
</script>

<template>
  <div id="app">
    <v-app id="inspire">
      <v-navigation-drawer
        v-model="drawer"
        clipped
        fixed
        app
      >
        <v-list dense>
          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Conjugation</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <v-list-tile @click="gotoConjugate">
            <v-list-tile-action>
              <v-icon class="blue--text">transform</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Practice</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>

          <v-list-tile>
            <v-list-tile-content>
              <v-list-tile-title>Translation</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-divider></v-divider>
          <v-list-tile @click="gotoTranslate">
            <v-list-tile-action>
              <v-icon class="blue--text">g_translate</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Practice</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="gotoAnswers">
            <v-list-tile-action>
              <v-icon class="green--text">library_books</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Answer Key</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title class="blue--text">
          Spanicon
          <v-icon class="blue--text">chat</v-icon>

        </v-toolbar-title>

      </v-toolbar>

      <main>
        <router-view></router-view>
      </main>

      <v-footer color="primary" app>
        <span class="white--text pa-3">&copy; 2018, Ricardo Rodriguez</span>
      </v-footer>
    </v-app>
  </div>
</template>

<script>
export default {
  name: "app",
  data() {
    return {
      drawer: false
    };
  },
  methods: {
    gotoConjugate() {
      this.$router.push("/");
    },
    gotoAnswers() {
      this.$router.push("/answers");
    },
    gotoTranslate() {
      this.$router.push("/translate");
    }
  }
};
</script>

<style>
#app {
  font-family: "Avenir", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
  margin-top: 60px;
}
</style>

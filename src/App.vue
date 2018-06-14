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
          <v-list-tile @click="gotoConjugate">
            <v-list-tile-action>
              <v-icon>dashboard</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Conjugations</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
          <v-list-tile @click="gotoTranslate">
            <v-list-tile-action>
              <v-icon>settings</v-icon>
            </v-list-tile-action>
            <v-list-tile-content>
              <v-list-tile-title>Translations</v-list-tile-title>
            </v-list-tile-content>
          </v-list-tile>
        </v-list>
      </v-navigation-drawer>
      <v-toolbar app fixed clipped-left>
        <v-toolbar-side-icon @click.stop="drawer = !drawer"></v-toolbar-side-icon>
        <v-toolbar-title>Spanicon: Conjugation and Translation Trainer</v-toolbar-title>

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

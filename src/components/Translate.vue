<template>
  <div class="">
    <v-content>
      <v-container>
        <v-layout justify-center>
          <v-card class="elevation-5" width="500px">
            <v-card-title>
              <v-layout row>
                <v-flex class="text-xs-left title">
                  Translate the Sentence
                </v-flex>
                <v-flex class="text-xs-right">
                  <v-icon style="cursor: pointer;" @click="enabled=true">settings</v-icon>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              {{phrase}}
              <v-text-field 
                @keyup.enter="check" 
                @keyup.escape="snackbar = false"
                v-model="answer"></v-text-field>
              <v-btn class="primary" @click="check">Check</v-btn>
              <v-btn class="primary" @click="shuffle">Shuffle</v-btn>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>

    <v-dialog
      v-model="enabled"
      persistent
      max-width="500px"
    >
      <v-card class="elevation-5">
        <v-card-title>
          <v-layout row>
            <v-flex class="text-xs-left title pa-3">
              Select Chapters
            </v-flex>
            <v-flex class="text-xs-right">
              <v-icon style="cursor: pointer;" class="pa-1 ma-2 red white--text" @click="enabled=false">close</v-icon>
            </v-flex>
          </v-layout>  
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile v-for="(chapterSelected, chapterNumber) in deck.selectedChapters" :key="chapterNumber">
            <v-checkbox :label="deck.chapterName(chapterNumber)" v-model="deck.selectedChapters[chapterNumber]"></v-checkbox>      
          </v-list-tile>
        </v-list>
      </v-card>
    </v-dialog>

    <v-snackbar
      :timeout="timeout"
      :top="true"
      v-model="snackbar"
    >
      {{ resultText }}
      <v-btn flat color="red" @click.native="snackbar = false">Close</v-btn>
    </v-snackbar>
  </div>
</template>

<script>
import { deck, chapters } from "../problems";
export default {
  data() {
    return {
      drawer: true,
      enabled: false,
      answer: "",
      guesses: 0,
      deck,
      chapters,
      timeout: 6000,
      resultText: "",
      snackbar: false
    };
  },
  computed: {
    phrase() {
      return this.deck.phrase;
    },
    translation() {
      return this.deck.translation;
    }
  },
  mounted() {
    this.shuffle();
  },
  methods: {
    shuffle() {
      this.deck.shuffle();
    },
    check() {
      this.resultText = "Incorrect!!!";

      if (this.answer.toLowerCase() === this.translation.toLowerCase()) {
        this.resultText = "Correct!";
        this.guesses = 0;
        this.shuffle();
      }

      if (this.guesses++ >= 3) {
        this.guesses = 0;
        this.resultText = `The correct translation is: "${this.translation}"`;
        this.shuffle();
      }

      this.answer = "";
      this.snackbar = true;
    }
  },
  watch: {
    enabled(val) {
      if (val === false) {
        var valid = this.deck.buildAndShuffle();

        if (!valid) {
          this.enabled = true;
        }
      }
    }
  }
};
</script>

<style scoped>
</style>
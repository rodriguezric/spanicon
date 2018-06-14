<template>
  <div class="">
    <v-content>
      <v-container>
        <v-layout justify-center>
          <v-card class="elevation-5" width="500px">
            <v-card-title>
              Translate the Sentence
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              {{phrase}}
              <v-text-field 
                @keyup.enter="check" 
                @keyup.escape="snackbar = false"
                v-model="answer"></v-text-field>
              <v-btn class="primary" @click="check">Check</v-btn>
            </v-card-text>
          </v-card>
        </v-layout>
      </v-container>
    </v-content>

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
import { translationDeck, chapters } from "../problems";
export default {
  data() {
    return {
      drawer: true,
      enabled: true,
      answer: "",
      guesses: 0,
      deck: translationDeck,
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
        this.resultText = `The correct translation is: "${this.translation}"`;
        this.shuffle();
      }

      this.answer = "";
      this.snackbar = true;
    }
  }
};
</script>

<style scoped>
</style>
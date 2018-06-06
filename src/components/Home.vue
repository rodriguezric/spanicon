<template>
    <div class="">
          <v-app id="inspire">
            <v-toolbar color="primary" dark fixed app>
            <v-toolbar-title>Spanish: Regular Conjugations</v-toolbar-title>
            </v-toolbar>
            <v-content>
                <v-container>
                    <v-layout justify-center>
                        <v-card class="elevation-5" width="500px">
                            <v-card-title>
                                Conjugate the Verb
                            </v-card-title>
                            <v-divider></v-divider>
                            <v-card-text>
                                What is the conjugation for {{verb}}, {{tense}} tense: {{subject}}?
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

            <v-footer color="primary" app>
            <span class="white--text pa-3">&copy; 2018, Ricardo Rodriguez</span>
            </v-footer>
        </v-app>
    </div>
</template>

<script>
import deck from "../deck";
export default {
  data() {
    return {
      enabled: true,
      answer: "",
      gueses: 0,
      deck,
      timeout: 6000,
      resultText: "",
      snackbar: false
    };
  },
  computed: {
    verb() {
      return this.deck.verb;
    },
    tense() {
      return this.deck.tense;
    },
    subject() {
      return this.deck.subject;
    },
    conjugation() {
      return this.deck.conjugation;
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

      console.log(`${this.deck.conjugation} vs ${this.answer}`);

      if (this.answer === this.deck.conjugation) {
        this.resultText = "Correct!";
        this.gueses = 0;
        this.shuffle();
      }

      if (this.gueses++ >= 3) {
        this.resultText = `The correct conjugation is ${this.conjugation}`;
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
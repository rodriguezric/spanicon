<template>
  <div class="">
    <v-content>
      <v-container>
        <v-layout justify-center>
          <v-card class="elevation-5" width="500px">
            <v-card-title>
              <v-layout row>
                <v-flex class="text-xs-left title">
                  Conjugate the Verb
                </v-flex>
                <v-flex class="text-xs-right">
                  <v-icon style="cursor: pointer;" @click="enabled=true">settings</v-icon>
                </v-flex>
              </v-layout>
            </v-card-title>
            <v-divider></v-divider>
            <v-card-text>
              <v-list>
                <v-list-tile>
                  <span style="width:64px" class="text-xs-right pr-2">
                    Verb:
                  </span> {{verb}}
                </v-list-tile>
                <v-list-tile>
                  <span style="width:64px" class="text-xs-right pr-2">
                    Tense: 
                  </span>
                    {{tense}}
                </v-list-tile>
                <v-list-tile>
                  <span style="width:64px" class="text-xs-right pr-2">
                  Subject:
                  </span>
                   {{subject}}
                </v-list-tile>
              </v-list>
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
              Select Verbs
            </v-flex>
            <v-flex class="text-xs-right">
              <v-icon style="cursor: pointer;" class="pa-1 ma-2 red white--text" @click="enabled=false">close</v-icon>
            </v-flex>
          </v-layout>  
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
          <v-list-tile v-for="(verbSelected, verbName) in deck.selectedVerbs" :key="verbName">
            <v-checkbox :label="verbName" v-model="deck.selectedVerbs[verbName]"></v-checkbox>      
          </v-list-tile>
        </v-list>
      </v-card>
      <v-divider></v-divider>
      <v-card>
        <v-card-title>
          <v-layout row>
            <v-flex class="text-xs-left title pa-3">
              Select Tenses
            </v-flex>
          </v-layout>  
        </v-card-title>
        <v-divider></v-divider>
        <v-list>
        <v-list-tile v-for="(tenseSelected, tenseName) in deck.selectedTenses" :key="tenseName">
          <v-checkbox :label="tenseName" v-model="deck.selectedTenses[tenseName]"></v-checkbox>      
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
import { deck, verbs, conjugations } from "../deck";
export default {
  data() {
    return {
      drawer: true,
      enabled: false,
      answer: "",
      guesses: 0,
      deck,
      verbs,
      conjugations,
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

      if (this.answer.toLowerCase() === this.deck.conjugation) {
        this.resultText = "Correct!";
        this.guesses = 0;
        this.shuffle();
      }

      if (this.guesses++ >= 3) {
        this.resultText = `The correct conjugation is ${this.conjugation}`;
        this.guesses = 0;
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
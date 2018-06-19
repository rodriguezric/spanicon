<template>
    <div class="answers">
        <v-content>
            <v-container>
                <v-layout justify-center>
                    <v-card class="elevation-5" width="500px">
                        <v-card-title>
                            <v-layout row>
                                <v-flex class="text-xs-left title">
                                    Translation Answers
                                </v-flex>
                            </v-layout>
                        </v-card-title>
                        <v-divider></v-divider>
                        <v-card-text>
                            <v-expansion-panel>
                                <v-expansion-panel-content v-for="(chapter, index) in chapters" :key="index" class="text-xs-left">
                                    <div slot="header" class="subheading" @click="toggleChapter(chapter)" style="cursor: pointer;">
                                        {{decks[chapter].name}}
                                    </div>
                                    <v-divider></v-divider>
                                    <v-card v-for="(problem, problemIndex) in decks[chapter].problems" :key="problemIndex">
                                        <v-card-text>
                                            <div class="text-xs-left">{{problem.phrase}}</div>
                                            <code class="text-xs-left">{{problem.translation}}</code>
                                        </v-card-text>
                                    </v-card>
                                </v-expansion-panel-content>
                            </v-expansion-panel>                        
                        </v-card-text>
                    </v-card>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import { studyChapters, decks } from "../problems";

export default {
  data() {
    return {
      chapters: studyChapters,
      decks
    };
  },
  computed: {},
  mounted() {},
  methods: {}
};
</script>

<style scoped>
</style>
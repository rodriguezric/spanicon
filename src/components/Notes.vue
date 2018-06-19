<template>
    <div class="">
        <v-content>
            <v-container>
                <v-layout justify-center>
                    <v-card class="elevation-5 mb-4 title" width="500px">
                        <div class="pa-4">
                            Study Notes 
                        </div>
                    </v-card>
                </v-layout>

                <v-layout justify-center  v-for="(chapter_name, index) in chapters" :key="index">
                    <v-card class="elevation-5" width="500px">
                        <v-expansion-panel>
                            <v-expansion-panel-content>
                                <v-card-title slot="header">
                                    <div class="title">
                                        {{ decks[chapter_name].name }}
                                    </div>                                    
                                </v-card-title>

                                <v-divider></v-divider>
                                <v-card-text>
                                    <div class="pa-2" v-for="(note, note_index) in decks[chapter_name].notes" :key="note_index">
                                        {{ note }}
                                    </div>
                                </v-card-text>
                            </v-expansion-panel-content>
                        </v-expansion-panel>
                    </v-card>
                </v-layout>
            </v-container>
        </v-content>
    </div>
</template>

<script>
import { decks, chapters } from "../notes";

export default {
  data() {
    return {
      chapters,
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
import chapter1 from './chapters/chapter1'
import chapter2 from './chapters/chapter2'
import chapter3 from './chapters/chapter3'
import chapter4 from './chapters/chapter4'
import chapter5 from './chapters/chapter5'
import chapter6 from './chapters/chapter6'
import chapter7 from './chapters/chapter7'
import chapter8 from './chapters/chapter8'


const decks = {
    chapter1,
    chapter2,
    chapter3,
    chapter4,
    chapter5,
    chapter6,
    chapter7,
    chapter8,
}

const chapters = ['chapter1', 'chapter2', 'chapter3', 'chapter4', 'chapter5', 'chapter6', 'chapter7', 'chapter8'];
const studyChapters = chapters.slice(0);

const selectedChapters = {};
chapters.forEach(chapter => {
    selectedChapters[chapter] = true;
})

const deck = {
    decks,
    chapters,
    chapter: {},
    selectedChapters,
    phrase: "",
    translation: "",

    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },

    chapterName(chapterNumber) {
        return this.decks[chapterNumber].name;
    },

    shuffle() {
        this.shuffleArray(this.chapters);
        this.chapter = this.decks[this.chapters[0]]

        this.shuffleArray(this.chapter.problems);
        this.phrase = this.chapter.problems[0].phrase;
        this.translation = this.chapter.problems[0].translation;
    },

    buildChapters() {
        this.chapters = [];
        for (var i in this.selectedChapters) {
            if (this.selectedChapters[i] === true) {
                this.chapters.push(i);
            }
        }
    },

    buildAndShuffle() {
        this.buildChapters();

        if (this.chapters.length === 0) {
            alert("Error: You must select as least one chapter.")
            return false;
        }

        this.shuffle();
        return true;
    }
};

export {
    deck,
    decks,
    chapters,
    studyChapters
}
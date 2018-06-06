const nadar = {
    present: [{
            subject: "yo",
            conjugation: "nado"
        },
        {
            subject: "tú",
            conjugation: "nadas"
        },
        {
            subject: "él",
            conjugation: "nada"
        },
        {
            subject: "nosotros",
            conjugation: "nadamos"
        },
        {
            subject: "ellos",
            conjugation: "nadan"
        }
    ],
    preterite: [{
            subject: "yo",
            conjugation: "nadé"
        },
        {
            subject: "tú",
            conjugation: "nadaste"
        },
        {
            subject: "él",
            conjugation: "nadó"
        },
        {
            subject: "nosotros",
            conjugation: "nadamos"
        },
        {
            subject: "ellos",
            conjugation: "nadaron"
        }
    ],
    imperfect: [{
            subject: "yo",
            conjugation: "nadaba"
        },
        {
            subject: "tú",
            conjugation: "nadabas"
        },
        {
            subject: "él",
            conjugation: "nadaba"
        },
        {
            subject: "nosotros",
            conjugation: "nadábamos"
        },
        {
            subject: "ellos",
            conjugation: "nadaban"
        }
    ],
    future: [{
            subject: "yo",
            conjugation: "nadaré"
        },
        {
            subject: "tú",
            conjugation: "nadarás"
        },
        {
            subject: "él",
            conjugation: "nadará"
        },
        {
            subject: "nosotros",
            conjugation: "nadaremos"
        },
        {
            subject: "ellos",
            conjugation: "nadarán"
        }
    ],
    conditional: [{
            subject: "yo",
            conjugation: "nadaría"
        },
        {
            subject: "tú",
            conjugation: "nadarías"
        },
        {
            subject: "él",
            conjugation: "nadaría"
        },
        {
            subject: "nosotros",
            conjugation: "nadaríamos"
        },
        {
            subject: "ellos",
            conjugation: "nadarían"
        }
    ]
};

const comer = {
    present: [{
            subject: "yo",
            conjugation: "como"
        },
        {
            subject: "tú",
            conjugation: "comes"
        },
        {
            subject: "él",
            conjugation: "come"
        },
        {
            subject: "nosotros",
            conjugation: "comemos"
        },
        {
            subject: "ellos",
            conjugation: "comen"
        }
    ],
    preterite: [{
            subject: "yo",
            conjugation: "comí"
        },
        {
            subject: "tú",
            conjugation: "comiste"
        },
        {
            subject: "él",
            conjugation: "comío"
        },
        {
            subject: "nosotros",
            conjugation: "comimos"
        },
        {
            subject: "ellos",
            conjugation: "comieron"
        }
    ],
    imperfect: [{
            subject: "yo",
            conjugation: "comía"
        },
        {
            subject: "tú",
            conjugation: "comías"
        },
        {
            subject: "él",
            conjugation: "comía"
        },
        {
            subject: "nosotros",
            conjugation: "comíamos"
        },
        {
            subject: "ellos",
            conjugation: "comían"
        }
    ],
    future: [{
            subject: "yo",
            conjugation: "comeré"
        },
        {
            subject: "tú",
            conjugation: "comerás"
        },
        {
            subject: "él",
            conjugation: "comerá"
        },
        {
            subject: "nosotros",
            conjugation: "comeremos"
        },
        {
            subject: "ellos",
            conjugation: "comerán"
        }
    ],
    conditional: [{
            subject: "yo",
            conjugation: "comería"
        },
        {
            subject: "tú",
            conjugation: "comerías"
        },
        {
            subject: "él",
            conjugation: "comería"
        },
        {
            subject: "nosotros",
            conjugation: "comeríamos"
        },
        {
            subject: "ellos",
            conjugation: "comerían"
        }
    ]
};

const vivir = {
    present: [{
            subject: "yo",
            conjugation: "vivo"
        },
        {
            subject: "tú",
            conjugation: "vives"
        },
        {
            subject: "él",
            conjugation: "vive"
        },
        {
            subject: "nosotros",
            conjugation: "vivimos"
        },
        {
            subject: "ellos",
            conjugation: "viven"
        }
    ],
    preterite: [{
            subject: "yo",
            conjugation: "viví"
        },
        {
            subject: "tú",
            conjugation: "viviste"
        },
        {
            subject: "él",
            conjugation: "vivío"
        },
        {
            subject: "nosotros",
            conjugation: "vivimos"
        },
        {
            subject: "ellos",
            conjugation: "vivieron"
        }
    ],
    imperfect: [{
            subject: "yo",
            conjugation: "vivía"
        },
        {
            subject: "tú",
            conjugation: "vivías"
        },
        {
            subject: "él",
            conjugation: "vivía"
        },
        {
            subject: "nosotros",
            conjugation: "vivíamos"
        },
        {
            subject: "ellos",
            conjugation: "vivían"
        }
    ],
    future: [{
            subject: "yo",
            conjugation: "viviré"
        },
        {
            subject: "tú",
            conjugation: "vivirás"
        },
        {
            subject: "él",
            conjugation: "vivirá"
        },
        {
            subject: "nosotros",
            conjugation: "viviremos"
        },
        {
            subject: "ellos",
            conjugation: "vivirán"
        }
    ],
    conditional: [{
            subject: "yo",
            conjugation: "viviría"
        },
        {
            subject: "tú",
            conjugation: "vivirías"
        },
        {
            subject: "él",
            conjugation: "viviría"
        },
        {
            subject: "nosotros",
            conjugation: "viviríamos"
        },
        {
            subject: "ellos",
            conjugation: "vivirían"
        }
    ]
};

const decks = {
    nadar,
    comer,
    vivir
};
const verbs = ['nadar', 'comer', 'vivir'];
const tenses = ['present', 'preterite', 'imperfect', 'future', 'conditional'];

const deck = {
    decks,
    verbs,
    tenses,
    verb: '',
    tense: '',
    subject: '',
    conjugation: '',
    shuffleArray(array) {
        for (let i = array.length - 1; i > 0; i--) {
            const j = Math.floor(Math.random() * (i + 1));
            [array[i], array[j]] = [array[j], array[i]];
        }
    },
    shuffle() {
        this.shuffleArray(this.verbs);
        this.shuffleArray(this.tenses);
        this.verb = this.verbs[0];
        this.tense = this.tenses[0];

        let deck = this.decks[this.verb][this.tense];
        this.shuffleArray(deck);

        this.subject = deck[0].subject;
        this.conjugation = deck[0].conjugation;
    }
}

export default deck;
const data = [
  {
    word: "dictionary",
    phonetic: "/ˈdɪkʃəˌnɛɹi/",
    phonetics: [
      { text: "/ˈdɪkʃəˌnɛɹi/", audio: "" },
      {
        text: "/ˈdɪkʃ(ə)n(ə)ɹi/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/dictionary-uk.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=503422",
      },
      { text: "/ˈdɪkʃəˌnɛɹi/", audio: "" },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "A reference work with a list of words from one or more languages, normally ordered alphabetically, explaining each word's meaning, and sometimes containing information on its etymology, pronunciation, usage, translations, and other data.",
            synonyms: ["wordbook"],
          },
          {
            definition:
              "(preceded by the) A synchronic dictionary of a standardised language held to only contain words that are properly part of the language.",
          },
          {
            definition:
              "(by extension) Any work that has a list of material organized alphabetically; e.g., biographical dictionary, encyclopedic dictionary.",
          },
          {
            definition:
              "An associative array, a data structure where each value is referenced by a particular key, analogous to words and definitions in a physical dictionary.",
          },
        ],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          { definition: "To look up in a dictionary." },
          { definition: "To add to a dictionary." },
          { definition: "To compile a dictionary." },
        ],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/dictionary"],
  },
];

const dataFormat2 = [
  {
    word: "like",
    phonetic: "/laɪk/",
    phonetics: [
      {
        text: "/laɪk/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/like-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=589454",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "(usually in the plural) Something that a person likes (prefers).",
            synonyms: ["favorite", "preference"],
            antonyms: ["dislike", "pet hate", "pet peeve"],
            example: "Tell me your likes and dislikes.",
          },
          {
            definition:
              "An individual vote showing support for, or approval of, something posted on the Internet.",
          },
        ],
      },
      {
        partOfSpeech: "verb",
        definitions: [
          {
            definition: "To enjoy, be pleased by; favor; be in favor of.",
            antonyms: ["dislike", "hate", "mislike"],
            example: "I like hamburgers.",
          },
          { definition: "To please." },
          {
            definition:
              "To derive pleasure of, by or with someone or something.",
          },
          {
            definition:
              "To prefer and maintain (an action) as a regular habit or activity.",
            example: "I like to go to the dentist every six months.",
          },
          {
            definition:
              "To have an appearance or expression; to look; to seem to be (in a specified condition).",
          },
          {
            definition:
              "To come near; to avoid with difficulty; to escape narrowly.",
            example: "He liked to have been too late.",
          },
          {
            definition:
              "To find attractive; to prefer the company of; to have mild romantic feelings for.",
            synonyms: ["enjoy", "fancy", "love"],
            antonyms: ["dislike", "hate", "mislike"],
            example: "I really like Sandra but don't know how to tell her.",
          },
          { definition: "To liken; to compare." },
          {
            definition:
              "To show support for, or approval of, something posted on the Internet by marking it with a vote.",
            antonyms: ["unlike"],
            example:
              "I can't stand Bloggs' tomato ketchup, but I liked it on Facebook so I could enter a competition.",
          },
          {
            definition:
              "(with 'would' and in certain other phrases) To want, desire. See also would like.",
            example: "We could go to the museum if you like.",
          },
        ],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/like"],
  },
  {
    word: "like",
    phonetic: "/laɪk/",
    phonetics: [
      {
        text: "/laɪk/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/like-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=589454",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      {
        partOfSpeech: "noun",
        definitions: [
          {
            definition:
              "(sometimes as the likes of') Someone similar to a given person, or something similar to a given object; a comparative; a type; a sort.",
            example:
              "It was something the likes of which I had never seen before.",
          },
          {
            definition:
              "The stroke that equalizes the number of strokes played by the opposing player or side.",
            example: "to play the like",
          },
        ],
      },
      {
        partOfSpeech: "adjective",
        definitions: [
          {
            definition: "Similar.",
            example: "My partner and I have like minds.",
          },
          { definition: "Likely; probable." },
        ],
      },
      {
        partOfSpeech: "adverb",
        definitions: [
          { definition: "Likely." },
          { definition: "In a like or similar manner." },
        ],
      },
      {
        partOfSpeech: "preposition",
        definitions: [
          { definition: "Similar to, reminiscent of." },
          {
            definition: "Typical of",
            example:
              "It would be just like Achilles to be sulking in his tent.",
          },
          {
            definition: "Approximating",
            example: "Popcorn costs something like $10 dollars at the movies.",
          },
          {
            definition: "In the manner of, similarly to.",
            example: "He doesn't act like a president.",
          },
          {
            definition: "Such as",
            example: "It's for websites like Wikipedia.",
          },
          {
            definition: "As if there would be.",
            example: "It looks like a hot summer in Europe.",
          },
        ],
      },
      {
        partOfSpeech: "conjunction",
        definitions: [
          { definition: "As, the way." },
          {
            definition: "As if; as though.",
            example: "It looks like you've finished the project.",
          },
        ],
      },
      {
        partOfSpeech: "interjection",
        definitions: [
          {
            definition: "Used to place emphasis upon a statement.",
            example: "Divint ye knaa, like?",
          },
        ],
      },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/like"],
  },
  {
    word: "like",
    phonetic: "/laɪk/",
    phonetics: [
      {
        text: "/laɪk/",
        audio:
          "https://api.dictionaryapi.dev/media/pronunciations/en/like-us.mp3",
        sourceUrl: "https://commons.wikimedia.org/w/index.php?curid=589454",
        license: {
          name: "BY-SA 3.0",
          url: "https://creativecommons.org/licenses/by-sa/3.0",
        },
      },
    ],
    meanings: [
      { partOfSpeech: "verb", definitions: [{ definition: "To be likely." }] },
    ],
    license: {
      name: "CC BY-SA 3.0",
      url: "https://creativecommons.org/licenses/by-sa/3.0",
    },
    sourceUrls: ["https://en.wiktionary.org/wiki/like"],
  },
];

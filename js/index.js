// data
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

// Add event lister to the form submission
document
  .querySelector(".search-form")
  .addEventListener("submit", handleFormSubmit);

function handleFormSubmit(e) {
  e.preventDefault();

  // display loading
  document.querySelector(".loading-spinner").classList.remove("d-none");

  const wordToSearch = getDOMValue(".search-form input", "value").trim();

  searchWord(wordToSearch);

  // setTimeout(displayThing, 3000);

  // function displayThing() {
  //   displaySearchWord(
  //     dataFormat2[0]["word"],
  //     dataFormat2[0]["phonetic"],
  //     formatMeanings(dataFormat2)
  //   );
  // }

  setDOMValue(".search-form input", "", "value");
}

// search word
const searchWord = async (word) => {
  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();

    // display search result
    displaySearchWord(
      data[0]["word"],
      data[0]["phonetic"],
      formatMeanings(data)
    );
  } catch (err) {
    const errorNode = document.createElement("div");
    errorNode.classList.add("word-meanings");
    errorNode.innerHTML = `<p class="h1 text-danger">${err}</p>`;

    document
      .querySelector(".word-meanings-wrapper")
      .replaceChild(errorNode, document.querySelector(".word-meanings"));

    // removing loading spinner
    document.querySelector(".loading-spinner").classList.add("d-none");
  }
};

// display word
function displaySearchWord(word, phonetic, meanings) {
  // 1. display query word
  setDOMValue(".query-word-wrapper > .query-word", word);
  setDOMValue(".query-word-wrapper > .phonetic", phonetic);

  // 2. display meanings
  const containerDiv = document.createElement("div");
  containerDiv.classList.add("word-meanings");

  for (let meaning in meanings) {
    // part of speech wrapper
    const div = document.createElement("div");
    div.classList.add("mb-4", "part-of-speech");

    // part of speech
    const h6 = document.createElement("h6");
    h6.innerText = meaning;

    div.appendChild(h6);

    // Ordered list for showing meaning
    const ol = document.createElement("ol");

    meanings[meaning].forEach((item) => {
      // list item for each definition
      const listItem = document.createElement("li");
      listItem.classList.add("mb-3");

      // definition
      const term = document.createElement("h6");
      term.innerText = item.definition;

      listItem.appendChild(term);

      // example
      showMetaInfo("Example", item.example, listItem);

      // synonyms
      showMetaInfo("Synonyms", item.synonyms, listItem);

      // antonyms
      showMetaInfo("Antonyms", item.antonyms, listItem);
      ol.appendChild(listItem);
    });

    // adding meanings to wrapper div
    div.appendChild(ol);

    // adding all parts of speech in container div
    containerDiv.appendChild(div);

    // removing loading spinner
    document.querySelector(".loading-spinner").classList.add("d-none");
  }

  // displaying new word meaning replacing previous one
  document
    .querySelector(".word-meanings-wrapper")
    .replaceChild(containerDiv, document.querySelector(".word-meanings"));
}

// format meaning data
function formatMeanings(data) {
  const reducedArr = data
    .reduce((result, current) => [...result, ...current.meanings], [])
    .reduce((result, current) => {
      if (result[current.partOfSpeech]) {
        result[current.partOfSpeech] = [
          ...result[current.partOfSpeech],
          ...current.definitions,
        ];
      } else {
        result[current.partOfSpeech] = [...current.definitions];
      }

      return result;
    }, {});

  return reducedArr;
}

// show meta info
function showMetaInfo(term, info, appendTo, tag = "small") {
  if (info) {
    const element = document.createElement(tag);
    element.innerHTML = ` <b>${term}: </b>` + info;
    appendTo.appendChild(element);
  }
}

// Get DOM value
function getDOMValue(selector, method = "innerText") {
  return document.querySelector(selector)[method];
}

// Set DOM value
function setDOMValue(selector, content, method = "innerText") {
  document.querySelector(selector)[method] = content;
}

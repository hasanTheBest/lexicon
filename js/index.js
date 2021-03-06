// Add event lister to the form submission
select(".search-form").addEventListener("submit", handleFormSubmit);

// handle form submission
function handleFormSubmit(e) {
  e.preventDefault();

  // select(".hear-icon").classList.add("d-none");

  const wordToSearch = getDOMValue(".search-form input", "value").trim();

  searchWord(wordToSearch);

  // developing purpose
  /*   setTimeout(displayThing, 2000);
  select(".loading-spinner").classList.remove("d-none");
  function displayThing() {
    displaySearchWord(
      dataFormat2[0]["word"],
      dataFormat2[0]["phonetics"],
      formatMeanings(dataFormat2)
    );
  }
 */
  setDOMValue(".search-form input", "", "value");
}

// search word
const searchWord = async (word) => {
  // display loading
  select(".loading-spinner").classList.remove("d-none");

  try {
    const res = await fetch(
      `https://api.dictionaryapi.dev/api/v2/entries/en/${word}`
    );
    const data = await res.json();

    // display search result
    Array.isArray(data)
      ? displaySearchWord(
          data[0]["word"],
          data[0]["phonetics"],
          formatMeanings(data)
        )
      : displayErrorMessage(
          data.title + ". " + data.message + ". " + data.resolution
        );
  } catch (err) {
    displayErrorMessage(err.message);
  }
};

// display word
function displaySearchWord(word, phonetics, meanings) {
  // display query word
  setDOMValue(".query-word-wrapper > .query-word", word);

  // set listen url
  setDOMValue(
    ".listen-word",
    phonetics?.filter(({ audio }) => audio)[0]["audio"],
    "src"
  );

  // set pronunciation text
  setDOMValue(
    ".query-word-wrapper > .phonetic",
    phonetics?.filter(({ audio }) => audio)[0]["text"]
  );

  // show hear icon
  select(".hear-icon").classList.remove("d-none");

  // listen pronunciation
  pronunciation();

  // display meanings
  const containerDiv = create("div");
  containerDiv.classList.add("word-meanings");

  for (let meaning in meanings) {
    // part of speech wrapper
    const div = create("div");
    div.classList.add("mb-4", "part-of-speech");

    // part of speech
    const h6 = create("h6");
    h6.innerText = meaning.toUpperCase();
    h6.classList.add("text-primary");

    div.appendChild(h6);

    // Ordered list for showing meaning/definition
    const ol = create("ol");

    meanings[meaning].forEach((item) => {
      // list item for each definition
      const listItem = create("li");
      listItem.classList.add("mb-3");

      // definition
      const term = create("h6");
      term.innerText = item.definition;

      listItem.appendChild(term);

      // example
      if (item.example) showMetaInfo("Example", item.example, listItem);

      // synonyms
      if (item.hasOwnProperty("synonyms")) {
        const synonyms = item.synonyms.map(
          (word) =>
            `<button type="button" class="btn btn-link p-0 text-dark" onclick='searchWord("${word}")'>${word}</button>`
        );
        synonyms.length > 0 &&
          showMetaInfo("Synonyms", synonyms.join(" "), listItem);
      }

      // antonyms
      if (item.hasOwnProperty("antonyms")) {
        const antonyms = item.antonyms.map(
          (word) =>
            `<button type="button" class="btn btn-link p-0 text-dark" onclick='searchWord("${word}")'>${word}</button>`
        );
        antonyms.length > 0 &&
          showMetaInfo("Antonyms", antonyms.join(" "), listItem);
      }

      // list item added to ordered list
      ol.appendChild(listItem);
    });

    // adding meanings to wrapper div
    div.appendChild(ol);

    // adding all parts of speech in container div
    containerDiv.appendChild(div);

    // removing loading spinner
    select(".loading-spinner").classList.add("d-none");
  }

  // displaying new word meaning replacing previous one
  document
    .querySelector(".word-meanings-wrapper")
    .replaceChild(containerDiv, select(".word-meanings"));
}

// Listen pronunciation
function pronunciation(data) {
  select(".hear-icon").addEventListener("click", () => {
    select(".listen-word").play();
  });
}

// show meta info
function showMetaInfo(term, meta, appendTo, tag = "small") {
  if (meta) {
    const element = create(tag);
    element.innerHTML = ` <b>${term}: </b>` + meta;
    appendTo.appendChild(element);
  }
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

// Show Error Message
function displayErrorMessage(message) {
  const errorNode = create("div");
  errorNode.classList.add("word-meanings");
  errorNode.innerHTML = `<p class="h1 text-danger">${message}</p>`;

  select(".word-meanings-wrapper").replaceChild(
    errorNode,
    select(".word-meanings")
  );

  // removing loading spinner
  select(".loading-spinner").classList.add("d-none");
}
// Get DOM value
function getDOMValue(selector, method = "innerText") {
  return select(selector)[method];
}

// Set DOM value
function setDOMValue(selector, content, method = "innerText") {
  select(selector)[method] = content;
}

// select dom
function select(selector) {
  return document.querySelector(selector);
}

// create dom
function create(element) {
  return document.createElement(element);
}

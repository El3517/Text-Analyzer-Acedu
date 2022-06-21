// Utility Logic

function noInputtedWord(word, text) {
    return (text.trim().length === 0) || (word.trim().length === 0);
}

// Business Logic
function wordCounter(text) {
    if (text.trim().length === 0) {
        return 0;
    }
    let wordCount = 0;
    const wordArray = text.split(" ");
    wordArray.forEach(function (element) {
        if (!Number(element)) {
            wordCount++;
        }
    });
    return wordCount;
}
// numberOfOccurrencesInText
function numberOfOccurrencesInText(word, text) {
    if (noInputtedWord(word, text)) {
      return 0;
    }
    const wordArray = text.split(" ");
    let wordCount = 0;
    wordArray.forEach(function(element) {
      if (element.toLowerCase().includes(word.toLowerCase())) {
        wordCount++;
      }
    });
    return wordCount;
  }

// boldPassage
function boldPassage(word, text) {
    if ((text.trim().length === 0) || (word.trim().length === 0)) {
        return "";
    }
    let htmlString = "<p>";
    let textArray = text.split(" ");
    textArray.forEach(function (element, index) {
        if (element.toLowerCase().includes(word.toLowerCase())) {
            htmlString = htmlString.concat("<b>" + element + "</b>");
        } else {
            htmlString = htmlString.concat(element);
        }
        if (index !== (textArray.length - 1)) {
            htmlString = htmlString.concat(" ");
        }
    });
    return htmlString + "</p>";
}


//   censoredWords
function censoredWords(text) {
    if (text.trim().length === 0) {
        return "";
    }
    let emptyArray = [];
    const badWords = ['zoinks', 'muppeteer', 'biffaroni', 'loopdaloop'];
    let textArray2 = text.split(" ");
    textArray2.forEach(function (element) {
        badWords.forEach(function (element2) {
            if (element.toLowerCase() === element2.toLowerCase()) {
                element = "******"
            }
        });
        emptyArray.push(element);
    });
    emptyArray.join(" ");
    return emptyArray;
}

// threeMostCommonWords

// UI logic
$(document).ready(function(){
    $("form#word-counter").submit(function(event){
      event.preventDefault();
      const passage = $("#text-passage").val();
      const word = $("#word").val();
      const wordCount = wordCounter(passage);
      const occurrencesOfWord = numberOfOccurrencesInText(word, passage);
      $("#total-count").html(wordCount);
      $("#selected-count").html(occurrencesOfWord);
      $("#bolded-passage").html(boldPassage(word, passage));
      $("#censored-word").html(censoredWords(word, passage));
    });
  });
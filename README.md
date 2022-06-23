Describe: wordCounter()

Test: "It should return 1 if a passage has just one word."
Code:
const text = "hello";
wordCounter(text);
Expected Output: 1

Test: "It should return 2 if a passage has two words."
Code:
const text = "hello there";
wordCounter(text);
Expected Output: 2

Test: "It should return 0 for an empty string."
Code: wordCounter("");
Expected Output: 0

Test: "It should return 0 for a string that is only spaces."
Code: wordCounter("            ");
Expected Output: 0

Test: "It should not count numbers as words."
Code: wordCounter("hi there 77 19");
Expected Output: 2


Describe: numberOfOccurrencesInText()
Test: "It should return 0 occurrences of a word for an empty string."
Code:
const text = "";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return 1 occurrence of a word when the word and the text are the same."
Code:
const text = "red";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 1

Test: "It should return 0 occurrences of a word when the word and the text are different."
Code:
const text = "red";
const word = "blue";
numberOfOccurrencesInText(word, text);
Expected Output: 0

Test: "It should return the number of occurrences of a word."
Code:
const text = "red blue red red red green";
const word = "red";
numberOfOccurrencesInText(word, text);
Expected Output: 4

Test: "It should return a word match regardless of case."
Code:
const text = "red RED Red green Green GREEN";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3

Test: "It should return a word match regardless of punctuation."
Code:
const text = "Red! Red. I like red, green, and yellow.";
const word = "Red";
numberOfOccurrencesInText(word, text);
Expected Output: 3


Describe: boldPassage()

Test: "It should return a non-matching word in a p tag."
Code:
const word = "hello";
const text = "yo";
boldPassage(word, text);
Expected Output: "<p>yo</p>"

Test: "It should return a matching word in a b tag."
Code:
const word = "hello";
const text = "hello";
boldPassage(word, text);
Expected Output: "<p><b>hello</b></p>"

Test: "It should wrap words that match in `b` tags but not words that don't."
Code:
const word = "hello";
const text = "hello there";
boldPassage(word, text);
Expected Output: "<p><b>hello</b> there</p>"


Describe : censoredWords()
Code:
const text = "zoinks,I made a mistake"
censoredWords(word);
Expected Output: *****,I made a mistake 


Describe : topThreeWords
Code:
const text = I am a boy, A boy I am, Being a boy is quite lovely
topThreeWords(word);
Expected Output: Boy3
                 A3
                 I2

# _{Text Analyzer Website}_

#### _{Text Analzer is a website for you to count or analyzer text in a }_

#### By _**{Eneje caleb}**_

## Technologies Used

* _HTML_
* _Bootstrap_
* _CSS_
* _JQuery_
* _Javascript_

## Description

_{Text analyzer is a web app that not only allows you to count the words in a passage but also helps you to find the three most common words,boldens selected words in the passage and censors selected offensive words, Text analzer helps to make text analysis fast and effiecient and reliable}_

## Setup/Installation Requirements

* _A fully operational computer_
* _Ensure the computer has access to the internet_
* _A fast working browser_




## Known Bugs

* _it wont censor incorrectly spelled offensive words_
* _it will bolden selected words with a symbol_


## License

_{ Peradventure you run into an issue with the site or you have contibution on how to make the site better, feel free to contact us the conatct information is down below.}_

## Webpage link
https://github.com/El3517/Text-Analyzer-Acedu.git

## Contact Information

_{contact us at enejecaleb@gmail.com.}_
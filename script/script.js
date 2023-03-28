import { cardInputCreation } from "./addQuestion.js";
import { createCharacterRemain } from "./characterLength";

// Bookmarks
function toggleBookmark(obj) {
  const bookmarkClear = "./assets/bookmark.png";
  const bookmarkFilled = "./assets/bookmark_filled.png";
  console.log(obj.src);
  if (obj.src.includes("_filled.png") == true) {
    obj.src = bookmarkClear;
  } else {
    obj.src = bookmarkFilled;
  }
  return;
}

// Hide and Reveal Answer

const revealAnswerButton = document.querySelectorAll(
  '[data-js="card_answer_button"]'
);

console.log(revealAnswerButton);
revealAnswerButton.forEach((Button) => {
  //
  Button.addEventListener("click", (event) => {
    console.log(event.target.children);
    event.target.firstElementChild.classList.toggle("hidden");
    event.target.lastElementChild.classList.toggle("hidden");
  });
});

// Add a new User question
const addQuizzQuestion = document.querySelector('[data-js="addQuizzQuestion"]');
addQuizzQuestion.addEventListener("submit", (e) => {
  e.preventDefault();
  const formData = new FormData(e.target);
  const dataObject = Object.fromEntries(formData);
  console.log(dataObject);
  const userQuestion = dataObject.question_form_userquestion;
  const userAnswer = dataObject.question_form_useranswer;
  const usertags = dataObject.question_form_category_hashtags;

  const bodyMain = document.querySelector("main");

  // function arguments(targetElement,cardQuestion,cardAnswer,taglist)

  cardInputCreation(bodyMain, userQuestion, userAnswer, usertags);
});

const targetElement = document.querySelectorAll(
  '[data-js="question_form_input"]'
);
targetElement.forEach((element) => {
  element.addEventListener("input", (event) => {
    let currentStringLength = parseInt(element.value.length);
    const maxCharacterLength = parseInt(element.getAttribute("maxlength"));
    console.log(currentStringLength, maxCharacterLength);
    const charactersRemaining = currentStringLength - maxCharacterLength;
    createCharacterRemain(charactersRemaining, targetElement);
  });
});

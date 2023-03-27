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
  //
});


const addQuizzQuestion = 1
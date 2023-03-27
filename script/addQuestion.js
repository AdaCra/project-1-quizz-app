// Targeting <body>.<main>

// const cardInputCreation = (cardQuestion, cardAnswer, taglist) => {
  const mainElement = document.querySelector('[data-js="card_display"]');
  // Begin the Creation
  // Section
  const card_section = document.createElement("section");
  card_section.classList.add("card_section");

  // Bookmark
  const bookmark_button = document.createElement("div");
  bookmark_button.classList.add("bookmark_button");

  const bookmark_tag = document.createElement("img");
  bookmark_tag.src = "../assets/bookmark.png";
  bookmark_tag.setAttribute("alt", "unbookmarked");
  bookmark_tag.classList.add("bookmark_tag");
  bookmark_tag.classList.add("icon");
  bookmark_tag.setAttribute("data-js", "bookmark-button");
  bookmark_tag.setAttribute("onclick", "toggleBookmark(this)");

  bookmark_button.appendChild(bookmark_tag);
  card_section.appendChild(bookmark_button);

  // Card Content
  // Heading
  const card_content_box = document.createElement("div");
  card_content_box.classList.add("card_content_box");
  const card_heading = document.createElement("h2");
  card_heading.classList.add("card_heading");
  card_heading.textContent = `Question`;

  card_content_box.appendChild(card_heading);

  // Question
  const card_question = document.createElement("p");
  card_question.classList.add("card_question");
  card_question.textContent = "${cardQuestion}";

  card_content_box.appendChild(card_question);

  // Answer Button
  const card_answer_button = document.createElement("p");
  card_answer_button.classList.add("card_answer_button");
  card_answer_button.setAttribute("data-js", "card_answer_button");
  // -----Reveal Button
  const card_answer_revealText = document.createElement("span");
  card_answer_revealText.classList.add("card_answer_revealText");
  card_answer_revealText.textContent = "Reveal Answer";

  card_answer_button.appendChild(card_answer_revealText);
  // -----Answer Reveal
  const card_answer_answerText = document.createElement("span");
  card_answer_answerText.classList.add("card_answer_answerText");
  card_answer_answerText.classList.add("hidden");
  const card_answer_answerText_bold = document.createElement("b");
  card_answer_answerText_bold.textContent = "${cardAnswer}";
  card_answer_answerText.appendChild(card_answer_answerText_bold);
  card_answer_button.appendChild(card_answer_answerText);

  card_answer_button.appendChild(card_answer_answerText);
  card_content_box.appendChild(card_answer_button);

  // Tag List
  const hash_tag_box = document.createElement("ul");
  hash_tag_box.classList.add("hash_tag_box");
  // taglist.forEach(hashtag => {
  const topic_tag = document.createElement("li");
  topic_tag.classList.add("topic_tag");
  topic_tag.textContent = "${taglist}";
  hash_tag_box.appendChild(topic_tag);
  // });
  card_content_box.appendChild(hash_tag_box);

  // Add Content to Card Section
  card_section.appendChild(card_content_box);
  // Add Card to Site
  mainElement.appendChild(card_section);
// };



export function createCharacterRemain(charactersRemaining, targetElement) {
  const createPElement = document.createElement("p");
  const form = document.querySelector('[data-js="addQuizzQuestion"]');
  createPElement.classList.add("question_form_input_remainingCharacters");
  createPElement.textContent = `You have ${charactersRemaining} remaining`;
  form.appendChild(createPElement);
  createPElement.after(targetElement);
}

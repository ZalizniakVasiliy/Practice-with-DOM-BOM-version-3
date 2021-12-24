"use strict";

(function () {
  const form = document.getElementById(`my-form`);

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const userInputs = event.target.querySelectorAll(`input`);
    const formData = {};

    for (let input of userInputs) {
      formData[input.name] = input.value;
    }

    createItem(formData);
    event.target.reset();
  });

  function createItem(itemData) {
    const myDiv = document.createElement(`div`);
    myDiv.classList.add(`my-object`);
    myDiv.innerHTML = JSON.stringify(itemData);
    document.querySelector(`.my-objects`).append(myDiv);
  }
})();

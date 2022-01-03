"use strict";

(function () {
  const form = document.getElementById(`my-form`);
  const userInputs = document.querySelectorAll(`input`);

  form.addEventListener(`submit`, (event) => {
    event.preventDefault();
    const formData = {};
    for (let input of userInputs) {
      formData[input.name] = input.value;
      if (input.value.trim() === "") {
        alert("Enter necessary value in empty field.");
        return;
      }
    }
    createItem(formData);
    event.target.reset();
  });

  userInputs.forEach((input) => {
    input.addEventListener("focus", (event) => {
      if (!event.target.value) {
        event.target.style.background = "rgb(255, 225, 225)";
      }
    });

    input.addEventListener("input", (event) => {
      if (event.target.value.trim() === "") {
        event.target.style.background = "rgb(255, 225, 225)";
      } else {
        event.target.style.background = "";
      }
    });
  });

  function createItem(itemData) {
    const myDiv = document.createElement(`div`);
    myDiv.classList.add(`my-object`);
    myDiv.innerHTML = JSON.stringify(itemData);
    document.querySelector(`.my-objects`).append(myDiv);
  }
})();

// "use strict";

// (function () {
//   const form = document.getElementById(`my-form`);

//   form.addEventListener(`submit`, (event) => {
//     event.preventDefault();
//     const userInputs = event.target.querySelectorAll(`input`);
//     const formData = {};

//     for (let input of userInputs) {
//       formData[input.name] = input.value;
//       if (input.value.trim() === "") {
//         alert("Enter necessary value in empty field.");
//         return;
//       }
//     }

//     createItem(formData);
//     event.target.reset();
//   });

//   function createItem(itemData) {
//     const myDiv = document.createElement(`div`);
//     myDiv.classList.add(`my-object`);
//     myDiv.innerHTML = JSON.stringify(itemData);
//     document.querySelector(`.my-objects`).append(myDiv);
//   }
// })();

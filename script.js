"use strict";
const charCount = document.querySelector("#charCount");
const postBtn = document.querySelector("#postBtn");
const postInput = document.querySelector("#postInput");
const max = postInput.maxLength;

// set initial innerHTML
charCount.textContent = `${postInput.value.length} / ${max}`;

postInput.addEventListener("input", function () {
  const length = postInput.value.length;
  const remaining = max - length;
  charCount.textContent = `${length} / ${max}`;

  // visual color change when char is less than 20
  charCount.classList.remove("warning", "danger");
  if (remaining <= 0) charCount.classList.add("danger");
  else if (remaining <= 20) charCount.classList.add("warning");

  // toggle button accesibility
  if (length === 0 || remaining < 0) {
    postBtn.disabled = true;
  } else {
    postBtn.disabled = false;
  }
});

"Use strict";
const charCount = document.querySelector("#charCount");
const postBtn = document.querySelector("#postBtn");
const postInput = document.querySelector("#postInput");

postInput.addEventListener("input", function () {
  let remaining = 160 - postInput.value.length;
  charCount.innerHTML = `${remaining} characters left`;

  if (postInput.value.length >= 160) {
    console.log(remaining, postInput.value.length);
    postInput.maxLength = 160;
  }
  // visual color change when char is less than 20
  remaining <= 20
    ? (charCount.style.color = "red")
    : (charCount.style.color = "inherit");
});

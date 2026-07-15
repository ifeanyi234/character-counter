"Use strict";
const charCount = document.querySelector("#charCount");
const postBtn = document.querySelector("#postBtn");
const postInput = document.querySelector("#postInput");

postInput.addEventListener("input", function () {
  const length = postInput.value.length;
  const remaining = 160 - length;
  charCount.innerHTML = `${remaining} characters left`;

  //setting limit
  if (length >= 160) postInput.maxLength = 160;

  // visual color change when char is less than 20
  remaining <= 20
    ? (charCount.style.color = "red")
    : (charCount.style.color = "#666");

  // toggle button accesibility
  length === 0 || remaining <= 0
    ? (postBtn.disabled = true)
    : (postBtn.disabled = false);
});

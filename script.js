"Use script";
const charCount = document.querySelector("#charCount");
const postBtn = document.querySelector("#postBtn");
const postInput = document.querySelector("#postInput");

postInput.addEventListener("input", function () {
  let remaining = 160 - postInput.value.length;
  if (postInput.value.length >= 160) {
    console.log(remaining, postInput.value.length);
    postInput.readOnly = true;
  }
});

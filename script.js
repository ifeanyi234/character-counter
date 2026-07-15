"Use script";
const charCount = document.querySelector("#charCount");
const postBtn = document.querySelector("#postBtn");
const postInput = document.querySelector("#postInput");

postInput.addEventListener("input", function () {
  console.log(postInput.value.length);
});

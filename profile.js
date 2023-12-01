// html elements
let button = document.querySelector("button");
let profileName = document.querySelector(".profile-name");
let profileImage = document.querySelector(".profile-image");
let main = document.querySelector(".main");

button.addEventListener("click", function() {

    // 1. Updated the innerHTML of profileName to your name or a made up one.
  profileName.innerHTML = "Adrian Ortiz";

    // 2. Updated the src of profileImage a picture of you or one that makes sense.
  profileImage.src = "https://static.wikia.nocookie.net/logopedia/images/d/db/Doodle_Jump_%28Icon%29.png/revision/latest/scale-to-width-down/250?cb=20221127201034";

    // 3. Updated the src of main to a photo that's be your first post.
  main.src = "";


});
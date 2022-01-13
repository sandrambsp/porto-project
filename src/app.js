function visitNow() {
  let name = prompt("What is your first name?");
  let email = prompt("What is your e-mail?");
  let age = prompt("How old are you?");

  if (age >= 18) {
    alert("Hi, " + name + "! We'll be in touch!");
  } else {
    alert("Sorry, " + name + "! You cannot plan your trip yet.");
  }
}
let visitNowButton = document.querySelector("button");

visitNowButton.addEventListener("click", visitNow);

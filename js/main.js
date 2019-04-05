// let state = true
// function toggle() {
//   state = !state
//   if (state) {
//     console.log("on")
//   } else {
//     console.log("off")
//   }
// }


document.addEventListener("DOMContentLoaded", function () {
  const buttonSwitch = document.getElementsByClassName('switch')[0];
  const statText = document.querySelector('.status');
  const body = document.querySelector('body');

  buttonSwitch.addEventListener("click", function () {
    buttonSwitch.classList.toggle("on");
    buttonSwitch.classList.toggle("off");
    body.classList.toggle("light");
    body.classList.toggle("dark");

    let switch_is_off = buttonSwitch.classList.contains("off")

    if (switch_is_off) {
      statText.innerText = "Hey, who turned off the lights?"
    } else {
      statText.innerText = "It's so bright-ish in here!"
    }

  })

});

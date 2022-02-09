
// selects all nav links and converts them to an array element right after
const navLinks = [...document.querySelectorAll(".nav-link")]

// attaches a click event listener to each nav link
function navToggleHandler() {
  navLinks.forEach((link) => {
    link.addEventListener("click", navToggler)
  })
}

function navToggler(event) {
  // removes active class from previous link
  navLinks.forEach((link) => {
    if (link.classList.contains("active")) {
      link.classList.remove("active")
    }
  })

  // adds the active class to the clicked nav-link element
  event.target.classList.add("active")
}

// navToggleHandler()
const hamburgerBtn = document.querySelector(".btn")
const navBar = document.querySelector(".navbar")

hamburgerBtn.addEventListener("click", () => {
  hamburgerBtn.classList.toggle("open")
  navBar.classList.toggle("out")
  navBar.classList.toggle("in")
  document.querySelector("body").classList.toggle("show")
})
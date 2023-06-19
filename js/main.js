const nav = document.querySelector("nav")
const navLeft = document.querySelector(".navbar-left")
const menuBtn = Array.from(document.querySelectorAll(".menu-btn"))
const members = Array.from(document.querySelectorAll(".member"))

for (const btn of menuBtn) {
  btn.onclick = toggleMenu
}

function toggleMenu() {
  nav.classList.toggle("show-nav")
  navLeft.classList.toggle("overlay")
}

for (const member of members) {
  const memberImg = member.querySelector("img")
  const socials = member.querySelector(".member-social")

  member.onmouseover = () => toggleSocials(memberImg, socials)
  member.onmouseleave = () => toggleSocialsOff(memberImg, socials)
}

function toggleSocials(memberImg, socials) {
  socials.style.display = "flex"
  memberImg.style.opacity = "25%"
}

function toggleSocialsOff(memberImg, socials) {
  socials.style.display = ""
  memberImg.style.opacity = ""
}


document.addEventListener("scroll", () => {
  if (window.scrollY > 0) {
    nav.classList.add("scrolled")
  } else {
    nav.classList.remove("scrolled")
  }
})

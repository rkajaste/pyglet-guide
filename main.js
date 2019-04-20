let routes

window.onload = () => {
  routes = {
    index: document.getElementById("index"),
    chapterOne: document.getElementById("chapter-one"),
    chapterTwo: document.getElementById("chapter-two"),
    chapterThree: document.getElementById("chapter-three")
  }
}

function goToPath (path) {
  Object.keys(routes).map((route) => {
    routes[route].classList.add('hide')
  })
  routes[path].classList.remove('hide')
}

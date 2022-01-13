const btnStart = document.querySelector("#start")
const btnEnd = document.querySelector("#end")

btnStart.addEventListener('click', () => {
  const video = document.querySelector("#youtube")
  video.innerHTML = `<iframe width="0" height="0" src="https://www.youtube.com/embed/BJNHoRrZw7k?autoplay=1" title="YouTube video player" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>`
})

btnEnd.addEventListener('click', () => {
  const video = document.querySelector("#youtube")
  video.innerHTML = ``
})
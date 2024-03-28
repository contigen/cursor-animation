const cursor = document.querySelector(`.cursor`)
document.addEventListener(`pointermove`, evt => {
  gsap.to(cursor, {
    x: evt.clientX - cursor.offsetWidth / 2,
    y: evt.clientY - cursor.offsetHeight / 2,
    duration: 0.5,
    ease: 'power2.out',
  })
})
document.addEventListener(`click`, evt => {
  const audioClick = new Audio(`./hover.mp3`)
  audioClick.play()
  audioClick.play()

  const container = document.createElement(`div`)
  const imageNum = Math.floor(Math.random() * 6) + 1
  container.innerHTML = `<div class='img-container'>
  <img src="./images/image_${imageNum}.avif" alt="image" />
  </div>`
  const firstChild = container.firstChild
  const itemsContainer = document.querySelector(`.items-container`)
  itemsContainer.appendChild(firstChild)
  firstChild.style.left = `${evt.clientX - firstChild.offsetWidth / 2}px`
  firstChild.style.top = `${evt.clientY}px`
  const rotation = Math.random() * 10 - 5
  gsap.set(firstChild, {
    scale: 0,
    rotation,
    transformOrigin: `center`,
  })
  const tl = gsap.timeline()
  const scale = Math.random() * 1 - 0.5
  tl.to(firstChild, {
    scale,
    duration: 0.5,
    delay: 0.1,
  })
  tl.to(
    firstChild,
    {
      y: `-=500`,
      duration: 4,
      opacity: 1,
      ease: `none`,
    },
    `<`
  ).to(
    firstChild,
    {
      opacity: 0,
      duration: 1,
      onComplete: () => itemsContainer.removeChild(firstChild),
    },
    `-=.5`
  )
})

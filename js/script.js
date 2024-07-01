const tombol = document.querySelector('.hamburger')
const nav = document.querySelector('.active')
tombol.addEventListener('click', () => {
   nav.style.display = 'flex'
})
nav.addEventListener('click', () => {
   nav.style.display = 'none'
})


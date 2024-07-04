// script.js

// Fungsi untuk menampilkan prompt dan menyambut pengguna
function greetUser() {
   let userName = '';

   // Terus menampilkan prompt hingga pengguna memasukkan nama yang tidak kosong
   while (!userName) {
       userName = prompt('Please enter your name:');
   }

   // Tampilkan pesan selamat datang
   const welcomeMessage = document.getElementById('username');
   welcomeMessage.innerHTML = `${userName}`;
}

// Panggil fungsi greetUser ketika halaman dimuat
window.onload = greetUser;


const tombol = document.querySelector('.hamburger')
const nav = document.querySelector('.active')
tombol.addEventListener('click', () => {
   nav.style.display = 'flex'
})
nav.addEventListener('click', () => {
   nav.style.display = 'none'
})

function submitForm() {

   const name = document.getElementById('nama').value
   const tanggal = document.getElementById('tgl').value
   const pesan = document.getElementById('pesan').value
   const selectedOption = document.querySelector('input[name="option"]:checked');
   if (selectedOption) {
      const value = selectedOption.value;

      if (name === '' || tanggal === '' || pesan === '') {
         alert('Please fill in all fields')
         return
      }

      const now = new Date()
      const date = now.toLocaleDateString();
      const time = now.toLocaleTimeString();

      const times = document.getElementById('time')
      times.innerHTML = `${date} ${time}`

      const user = document.getElementById('username')
      user.innerHTML = `${name}`
      const table = document.getElementById('table-user')
      table.innerHTML = `
   <tr>
   <td style="width: 20%;">Nama</td>
   <td>:</td>
   <td>${name}</td>
   </tr>
   <tr>
   <td>Tanggal Lahir</td>
   <td>:</td>
   <td>${tanggal}</td>
   </tr>
   <tr>
   <td>Jenis Kelamin</td>
   <td>:</td>
   <td>${value}</td>
   </tr>
   <tr>
   <td>Pesan</td>
   <td>:</td>
   <td style="text-align: justify;">${pesan}</td>
   </tr>`

      document.getElementById('myForm').reset()
   } else {
      if (name === '' || tanggal === '' || pesan === '' || !selectedOption) {
         alert('Please fill in all fields')
         return
      }
   }
}

// script.js

// script.js

let currentIndex = 0;

function showSlide(index) {
   const slides = document.querySelectorAll('.carousel-images img');
   const totalSlides = slides.length;

   if (index >= totalSlides) {
      currentIndex = 0;
   } else if (index < 0) {
      currentIndex = totalSlides - 1;
   } else {
      currentIndex = index;
   }

   const newTransformValue = -currentIndex * 100;
   document.querySelector('.carousel-images').style.transform = `translateX(${newTransformValue}%)`;
}

function nextSlide() {
   showSlide(currentIndex + 1);
}

function prevSlide() {
   showSlide(currentIndex - 1);
}


// Auto-slide functionality
setInterval(nextSlide, 3000); // Change image every 3 seconds

// Initial call to show the first slide
showSlide(currentIndex);

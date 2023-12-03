const container = document.querySelector('.container');
const seats = document.querySelectorAll('.row .seat:not(.occupied');
const count = document.getElementById('count');
const total = document.getElementById('total');

// Get concert name and change to label
const movieContainer = document.querySelector('.movie-container label')
const concertName = localStorage.getItem('concertName')
movieContainer.textContent = `Now picking: ${concertName}`

// Default ticket price
let ticketPrice = 0

// Set ticket price based on what concert select
function setPrice(concertName) {
  switch (concertName) {
    case '4EVE THE 1st CONCERT FRIENDS & FAMILY':
      ticketPrice = 3500
      break
    case 'NEON COUNTDOWN 2023':
      ticketPrice = 3200
      break
    case 'Ed Sheeran ‘+ - = ÷ x’ Mathematics Tour Bangkok 2024':
      ticketPrice = 5000
      break
    case 'VERY LIVE Present JOJI: SMITHEREENS TOUR LIVE IN BANGKOK 2022':
      ticketPrice = 3000
      break
    case 'JEREMY ZUCKER MORE NOISE !!!! WORLD TOUR LIVE IN BANGKOK':
      ticketPrice = 2700
      break
  }
}

// Click select
container.addEventListener('click', (e) => {
  if (e.target.classList.contains('seat') && !e.target.classList.contains('occupied')) {

    e.target.classList.toggle('selected');
    updateSelectedCount()
  }
});

function updateSelectedCount() {
  // Set the price depend on what concert in localStorage
  setPrice(concertName)

  localStorage.setItem('seatPrice', ticketPrice)

  const selectedSeats = document.querySelectorAll('.row .seat.selected')
  localStorage.setItem('qty', selectedSeats.length)

  // Loop get seat numbers
  const seatsIndex = [...selectedSeats].map((seat) => [...seats].indexOf(seat))
  localStorage.setItem('selectedSeats', JSON.stringify(seatsIndex))

  //copy selected seats into arr
  // map through array
  //return new array of indexes

  const selectedSeatsCount = selectedSeats.length;

  // Update HTML
  count.innerText = selectedSeatsCount;
  let storageTotal = selectedSeatsCount * ticketPrice
  localStorage.setItem('total-amount', JSON.stringify(storageTotal))
  total.innerText = storageTotal
}

// Submit
const submitBtn = document.querySelector('#submitSeat')
submitBtn.addEventListener('click', () => {
  window.location.href = '/receipt/index.html'
})
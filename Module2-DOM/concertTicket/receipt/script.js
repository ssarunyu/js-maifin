const nameShow = document.querySelector('#nameShow')
const seatShow = document.querySelector('#seatShow')
const seatPriceShow = document.querySelector('#seatPriceShow')
const qtyShow = document.querySelector('#qtyShow')
const amountShow = document.querySelector('#amountShow')
const subTotalShow = document.querySelector('#sub-total')
const vatShow = document.querySelector('#vatShow')
const totalPayShow = document.querySelector('#total-pay')

const getConcertName = localStorage.getItem('concertName')
const getSeat = localStorage.getItem('selectedSeats')
const getseatPrice = localStorage.getItem('seatPrice')
const getQty = localStorage.getItem('qty')
const getamountPrice = parseInt(localStorage.getItem('total-amount'))

function randomReceiptNo() {
    let randomNo = Math.floor(Math.random() * (90000 - 10000) + 10000)
    return randomNo
}
const receiptNoShow = document.querySelector('#receiptNoShow')
receiptNoShow.textContent = `Receipt No: ${randomReceiptNo()}`

// (getamountPrice / 100) * 7) = vat 7%
// 100 = ค่าบริการ
let vat = ((getamountPrice / 100) * 7) + 100

nameShow.textContent = getConcertName
seatShow.textContent = getSeat
seatPriceShow.textContent = `${getseatPrice}฿`
qtyShow.textContent = getQty
amountShow.textContent = `${getamountPrice}฿`
subTotalShow.textContent = `${getamountPrice}฿`
vatShow.textContent = `${vat}฿`
totalPayShow.textContent = `${getamountPrice + vat}฿`


const printBtn = document.querySelector('#print-btn')
printBtn.addEventListener('click', printReceipt)
function printReceipt() {
    window.print()
}

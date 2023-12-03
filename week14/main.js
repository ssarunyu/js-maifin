const submitBtn = document.querySelector('button')
const inputUser = document.querySelector('#input-user')
const inputPsw = document.querySelector('#input-psw')
const pEl = document.querySelector('p')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    console.log('Cancel submit listen the server')
    if(!inputUser.value || !inputPsw.value) {
        pEl.innerHTML = '<p style="color: red">กรอกข้อมูลไม่ครบ</p>'
    } else {
        pEl.textContent = 'ฟอร์มได้รับข้อมูลครบ'
    }
})

// keydown, keypress, keyup
inputUser.addEventListener('keyup', (e) => {
    if(e.key === 'Enter') {
        pEl.textContent = inputUser.value
    }
})

// input
inputUser.addEventListener('input', () => {
    pEl.textContent = inputUser.value
})


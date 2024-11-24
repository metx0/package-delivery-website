import { form1, form2, options } from './forms.js'

// Indicates in which form we are currently
let currentForm = 1

const form = document.querySelector('.form')
const errorModal = new bootstrap.Modal(document.getElementById('errorModal'))

/*
Get all the buttons with class btn, and add the event listener 
according to the classes
*/
function addBtnListeners() {
    const btns = document.querySelectorAll('.btn')
    console.log(btns)

    btns.forEach(btn => {
        if (btn.classList.contains('btn-next')) {
            btn.addEventListener('click', handleNext)
        } else if (btn.classList.contains('btn-previous')) {
            btn.addEventListener('click', handlePrevious)
        }
    })
}

function handleNext() {
    // We check in which form we are, validate the data specific to that form,
    // and change to the next form

    switch (currentForm) {
        case 1:
            console.log(currentForm)
            const originZip = document.getElementById('originZip').value
            const destinationZip = document.getElementById('destinationZip').value

            if (!originZip || !destinationZip) {
                errorModal.show()
                return
            }

            // Move to the next form
            form.innerHTML = form2
            addBtnListeners()
            currentForm++
            break
        case 2:
            console.log(currentForm)
            const weight = document.getElementById('packetWeight').value
            const height = document.getElementById('packetHeight').value
            const width = document.getElementById('packetWidth').value
            const length = document.getElementById('packetLength').value

            if (!weight || !height || !width || !length) {
                errorModal.show()
                return
            }

            console.log(weight, height, width, length)

            form.innerHTML = options
            addBtnListeners()
            currentForm++
            break
    }
}

function handlePrevious() {
    // We check in which form we are, validate the data specific to that form,
    // and change to the previous form

    switch (currentForm) {
        case 2:
            currentForm--
            form.innerHTML = form1
            addBtnListeners()
            break
    }
}

window.addEventListener('load', () => {
    addBtnListeners()
})

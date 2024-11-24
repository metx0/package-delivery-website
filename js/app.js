import { form1, form2, options, form4 } from './forms.js'

// Indicates in which form we are currently
let currentForm = 1
let originZip, destinationZip, weight, height, width, length, selectedCompany

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

/* 
We check in which form we are, validate the data specific to that form,
and change to the next form 
*/
function handleNext() {
    switch (currentForm) {
        // First form for zip values
        case 1:
            originZip = document.getElementById('originZip').value
            destinationZip = document.getElementById('destinationZip').value

            if (!originZip || !destinationZip) {
                errorModal.show()
                return
            }

            // Move to the next form
            form.innerHTML = form2
            addBtnListeners()
            currentForm++
            break
        // Second form, for dimensions
        case 2:
            weight = document.getElementById('packetWeight').value
            height = document.getElementById('packetHeight').value
            width = document.getElementById('packetWidth').value
            length = document.getElementById('packetLength').value

            if (!weight || !height || !width || !length) {
                errorModal.show()
                return
            }

            form.innerHTML = options
            addBtnListeners()
            currentForm++
            break
        // Options for delivery
        case 3:
            // Get the selected company
            const btns = document.querySelectorAll('.btn-option')

            btns.forEach(btn => {
                if (btn.classList.contains('estafeta')) 
                    selectedCompany = 'estafeta'
                else if (btn.classList.contains('redpack')) 
                    selectedCompany = 'redpack'
                else if (btn.classList.contains('dhl')) 
                    selectedCompany = 'dhl'
                else if (btn.classList.contains('fedex')) 
                    selectedCompany = 'fedex'
            })

            console.log(selectedCompany)
            form.innerHTML = form4
            addBtnListeners()
            currentForm++
            break
        // Last form, for personal data 
        case 4:
            break
    }
}

/* 
We check in which form we are, validate the data specific to that form,
and change to the previous form 
*/
function handlePrevious() {
    switch (currentForm) {
        // Return to the first form
        case 2:
            currentForm--
            form.innerHTML = form1
            addBtnListeners()
            break
        // Return to the second form
        case 3:
            currentForm--
            form.innerHTML = form2
            addBtnListeners()
            break
    }
}

window.addEventListener('load', () => {
    addBtnListeners()
})

document.addEventListener('DOMContentLoaded', () => {
    displayProgressTitle()
    loadProgressBar()

    // Reveals answer on click of question in FAQ
    const questionDropdowns = document.querySelectorAll('#question')
    questionDropdowns.forEach((question) => {
        question.addEventListener('click', () => {dropdownAnswer(question)}) 
    })

    // Reveals donation field when user clicks on 'Join the cause!'
    const donateButton = document.getElementById('donation-button')
    donateButton.addEventListener('click', () => {displayDonationField()})
    
    // Check if donation amount is filled out if trying to submit
    const donationAmount = document.getElementById('donation-amount')
    donationAmount.addEventListener('keyup', () => {
        validateInputField('donation-submit', donationAmount.value)
    })

    // Make sure email field is filled out if trying to submit
    const emailInput = document.getElementById('email-input')
    emailInput.addEventListener('keyup', () => {
        validateInputField('email-submit', emailInput.value)
    })
})

// 
function displayProgressTitle() {
    const barContainer = document.getElementById('progress-section')
    const progressTitle = document.createElement('h1')
    // placeholder value for now
    progressTitle.textContent = `We're 85% there!`
    barContainer.prepend(progressTitle)
}

// Determine progress bar width and trigger animation to show it
function loadProgressBar() {
    const barProgress = document.getElementById('bar-fg')
    // placeholder fixed value for now
    barProgress.style.width = '85%'
    barProgress.style.animationName = 'loadbar'
}


function dropdownAnswer(question) {
    const answer = question.parentElement.children[1]
    answer.hidden ? answer.hidden = false : answer.hidden = true;
}


// Check if an input field is filled
function validateInputField(buttonId, value) {
    const button = document.getElementById(buttonId)
    if (value) {
        button.disabled = false;
    } else {
        button.disabled = true;
    };
}


function displayDonationField() {
    const parentSection = document.getElementById('progress-section')
    const hasForm = parentSection.querySelector('form')
    hasForm.hidden == true ? hasForm.hidden = false : hasForm.hidden = true
    
}
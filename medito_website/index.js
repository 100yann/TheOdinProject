document.addEventListener('DOMContentLoaded', () => {
    displayProgressTitle()
    loadProgressBar()

    // Reveal answer on click of question in FAQ
    const questionDropdowns = document.querySelectorAll('#question')
    questionDropdowns.forEach((question) => {
        question.addEventListener('click', () => {dropdownAnswer(question)}) 
    })

    const donateButton = document.getElementById('donate-button')
    donateButton.addEventListener('click', () => {displayDonationField()})
    
    // Make sure email field is filled out if trying to submit
    const emailInput = document.getElementById('email-input')
    emailInput.addEventListener('keyup', () => {validateEmailField(emailInput)})
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

// Check if email field is filled
function validateEmailField(emailInput) {
    const emailSubmit = document.getElementById('email-submit')
    if (!emailInput.value) {
        emailSubmit.disabled = true;
    } else {
        emailSubmit.disabled = false;
    };
}


function displayDonationField() {
    const parentSection = document.getElementById('progress-section')
    const hasForm = parentSection.querySelector('form')

    if (hasForm != null) {
        hasForm.hidden == true ? hasForm.hidden = false : hasForm.hidden = true
    } else {
        console.log('c')
        const donationForm = document.createElement('form')
        donationForm.setAttribute('method', 'post')

        // Create an input for the donation
        var donationAmount = document.createElement('input')
        donationAmount.setAttribute('type', 'number')
        donationAmount.setAttribute('name', 'donation-amount')
        donationAmount.setAttribute('placeholder', 'Donation amount')
        donationAmount.id = 'donation-amount'
        donationForm.append(donationAmount)

        // Create a submit button
        var submitDonation = document.createElement('input')
        submitDonation.setAttribute('type', 'submit')
        submitDonation.setAttribute('value', 'Donate')
        submitDonation.id = 'submit-donation'
        donationForm.append(submitDonation)

        parentSection.append(donationForm)
    }

    
    
}
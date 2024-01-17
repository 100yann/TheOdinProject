document.addEventListener('DOMContentLoaded', () => {
    const GOAL = 100000
    var raised = 10000
    var raisedPercentage = calculatePercentage(GOAL, raised)
    displayProgressTitle(raisedPercentage)
    loadProgressBar(raisedPercentage)

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

    const donationSubmit = document.getElementById('donation-submit')
    donationSubmit.addEventListener('click', (event) => {
        event.preventDefault()
        raised += parseInt(donationAmount.value)
        raisedPercentage = calculatePercentage(GOAL, raised)
        displayProgressTitle(raisedPercentage)  
        loadProgressBar(raisedPercentage)

    })

    // Make sure email field is filled out if trying to submit
    const emailInput = document.getElementById('email-input')
    emailInput.addEventListener('keyup', () => {
        validateInputField('email-submit', emailInput.value)
    })
})

// 
function displayProgressTitle(progress) {
    const progressTitle = document.getElementById('progress-header')
    progressTitle.textContent = `We're ${progress}% there!`
}

// Determine progress bar width and trigger animation to show it
function loadProgressBar(progress) {
    const barProgress = document.getElementById('bar-fg')
    console.log(progress, typeof(progress))
    // placeholder fixed value for now
    barProgress.style.width = `${progress}%`
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


function calculatePercentage(goal, raisedAmount) {
    return Math.round((raisedAmount / goal) * 100)
}
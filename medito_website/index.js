document.addEventListener('DOMContentLoaded', () => {
    const GOAL = 100000
    var raised = 10000
    var raisedInPercentage = calculatePercentage(GOAL, raised)
    updateProgressTitles(amountRaised = raised,
        percentageRaised = raisedInPercentage,
        goal = GOAL
        )
    loadProgressBar(raisedInPercentage)

    // Reveals answer on click of question in FAQ
    const questionDropdowns = document.querySelectorAll('#question')
    questionDropdowns.forEach((question) => {
        question.addEventListener('click', () => {dropdownAnswer(question)}) 
    })
    
    // Check if donation amount is filled out if trying to submit
    const donationAmount = document.getElementById('donation-amount')
    donationAmount.addEventListener('keyup', () => {
        validateInputField('donation-submit', donationAmount.value)
    })

    const donationSubmit = document.getElementById('donation-submit')
    donationSubmit.addEventListener('click', (event) => {
        event.preventDefault()
        const donationInputField = document.getElementById('donation-amount-field-inner')
        if (donationAmount.value > 0) {
            raised += parseInt(donationAmount.value)
            raisedInPercentage = calculatePercentage(GOAL, raised)

            updateProgressTitles(raised, raisedInPercentage, GOAL)  
            loadProgressBar(raisedInPercentage)
            clearValues('donation-amount')

            if (donationInputField.style.border == '2px solid red') {
                donationInputField.style.border = '1px solid #c8c8c8'

            }
        } else {
            const donationInputField = document.getElementById('donation-amount-field-inner')
            donationInputField.style.border = '2px solid red'
        }
    })

    // Make sure email field is filled out if trying to submit
    const emailInput = document.getElementById('email-input')
    emailInput.addEventListener('keyup', () => {
        validateInputField('email-submit', emailInput.value)
    })
})


function updateProgressTitles(amountRaised, percentageRaised, goal) {
    const donationsRaised = document.getElementById('donations-raised')
    donationsRaised.textContent = `$${amountRaised}`

    const donationGoal = document.getElementById('donation-goal')
    donationGoal.textContent = `${percentageRaised}% raised of $${goal}`
}

// Determine progress bar width and trigger animation to show it
function loadProgressBar(progress) {
    const barProgress = document.getElementById('bar-fg')
    console.log(progress, typeof(progress))
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


function calculatePercentage(goal, raisedAmount) {
    return Math.round((raisedAmount / goal) * 100)
}


function clearValues(field) {
    fieldToClear = document.getElementById(field)
    fieldToClear.value = ''
}
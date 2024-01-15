document.addEventListener('DOMContentLoaded', () => {
    displayProgressTitle()
    loadProgressBar()

    const questionDropdowns = document.querySelectorAll('#question')
    questionDropdowns.forEach((question) => {
        question.addEventListener('click', () => {dropdownAnswer(question)}) 
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
    console.log(answer)
    answer.hidden ? answer.hidden = false : answer.hidden = true;
}
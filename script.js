let textarea = document.querySelector("textarea")
let logWords = document.getElementById("counter-words")
let logCharacter = document.getElementById("counter-character")

window.addEventListener("input", e => updateCounter(e))
window.addEventListener("input", e => updateCounter(e))

function updateCounter(e) {
    logCharacter.textContent= e.target.value.length 
    logWords.textContent = e.target.value.length === 0 ? 0 : e.target.value.trim().split(/\s+/).length;
}


const modalOverlay = document.querySelector('.modal-overlay')
const cards = document.querySelectorAll('.card')

for (let card of cards) {
    card.addEventListener('click', function() {

        const recipeTitle = card.querySelector('.title').innerHTML
        const recipeAuthor = card.querySelector('.author').innerHTML
        const imageId = card.getAttribute('id')


        document.querySelector('.modal-content h2').innerHTML = recipeTitle
        document.querySelector('.modal-content h4').innerHTML = recipeAuthor
        modalOverlay.querySelector('img').src = `./img/${imageId}.png`  

        modalOverlay.classList.add('active')
    })
}

modalOverlay.querySelector('.close-modal').addEventListener('click', function() {
    modalOverlay.classList.remove('active')
})
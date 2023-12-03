document.addEventListener('DOMContentLoaded', function () {
    const concerts = document.querySelectorAll('.concert');

    concerts.forEach(concert => {
        concert.addEventListener('click', function () {
            navigateToSeatSelectionPage();
            const concertName = concert.getAttribute('data-concert');
            console.log(concertName)
            // Storage in localStorage to show in Now picking:
            localStorage.setItem('concertName', concertName)
        })
    })

    function navigateToSeatSelectionPage() {
        window.location.href = './seat/index.html';
    }

    const searchInput = document.querySelector('#search')
    searchInput.addEventListener('input', () => {
        const searchTerm = searchInput.value.toLowerCase();
        concerts.forEach(concert => {
            const concertTitle = concert.getAttribute('data-concert').toLowerCase()
            const concertElement = concert.closest('.concert')
            if (concertTitle.includes(searchTerm)) {
                concertElement.style.display = 'block'
            } else {
                concertElement.style.display = 'none'
            }
        })
    })
})
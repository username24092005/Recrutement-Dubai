document.getElementById('recruitmentForm').addEventListener('submit', function(event) {
    const email = document.getElementById('email').value;
    const motDePasse = document.getElementById('motDePasse').value;
    const dateNaissance = document.getElementById('dateNaissance').value;
    
    if (!isValidEmail(email)) {
        alert('Veuillez entrer une adresse e-mail valide');
        event.preventDefault();
        return;
    }
    
    if (!isValidDate(dateNaissance)) {
        alert('Veuillez entrer une date de naissance valide (jj/mm/aaaa)');
        event.preventDefault();
        return;
    }
    
    console.log('Tentative d\'inscription:', { email, motDePasse, dateNaissance });
});

function isValidEmail(email) {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function isValidDate(date) {
    const dateRegex = /^(0[1-9]|[12][0-9]|3[01])\/(0[1-9]|1[012])\/(19|20)\d\d$/;
    return dateRegex.test(date);
}

// Image slider functionality
const imageUrls = [
    'https://media.cntraveler.com/photos/646fac649b31895c2ec85c37/16:9/w_2560%2Cc_limit/Emirates%2520Offering%2520Free%2520Hotel%2520Stays%2520This%2520Summer%2520to%2520Passengers%2520Flying%2520to%2520Dubai_emma-harrisova-UDsO83Ts6tQ-unsplash.jpg',
    'https://lp-cms-production.imgix.net/features/2017/09/dubai-marina-skyline-2c8f1708f2a1.jpg?auto=compress&fit=crop&format=auto&q=50&w=1200&h=800',
    'https://cdn.britannica.com/43/134743-050-D0625A44/train-first-Dubai-emirate-rapid-transit-line-kind-Sept-10-2009.jpg'
];
let currentImageIndex = 0;
const sliderImage = document.getElementById('sliderImage');

function changeImage() {
    sliderImage.src = imageUrls[currentImageIndex];
    currentImageIndex = (currentImageIndex + 1) % imageUrls.length;
}

changeImage(); // Load first image immediately
setInterval(changeImage, 5000); // Change image every 5 seconds

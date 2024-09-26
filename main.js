//Automatic Email
(function(){
    emailjs.init("xrHYJFWw4IAXexspv");  // Masukkan user_id dari EmailJS
})();

// Handle form submission
document.getElementById('contactForm').addEventListener('submit', function(event) {
    event.preventDefault(); // Mencegah form refresh halaman

    emailjs.sendForm('service_vposn3q', 'template_do22hz7', this)
        .then(function(response) {
            alert('Email successfully sent!');
        }, function(error) {
            alert('Failed to send email. Please try again later.');
        });
});

// Animate images on scroll
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'; // Trigger the animation
        }
    });
});

// Apply the observer to all images in the document
document.querySelectorAll('img').forEach(img => {
    observer.observe(img); // Observe each image for scroll events
});

// Animate text on scroll
const observer2 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'; // Trigger animation
        }
    });
});

// Apply observer to all headings and paragraphs
document.querySelectorAll('h1, h2, p').forEach(element => {
    observer2.observe(element);
});


// Animate buttons on scroll
const observer3 = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationPlayState = 'running'; // Start the animation
        }
    });
});

// Apply observer to all buttons
document.querySelectorAll('button, a.btn').forEach(button => {
    observer3.observe(button);
});

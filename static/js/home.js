// Smooth Scroll for Navigation Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href').substring(1);
        const targetSection = document.getElementById(targetId);
        
        if (targetSection) {
            window.scrollTo({
                top: targetSection.offsetTop - 50,  // Adjust for header height
                behavior: 'smooth'
            });
        }
    });
});

// Dynamic Welcome Message
window.addEventListener('DOMContentLoaded', () => {
    const welcomeMessage = document.getElementById('welcome-message');
    
    if (welcomeMessage) {
        const hour = new Date().getHours();
        let greeting;
        
        if (hour < 12) {
            greeting = 'Good Morning!';
        } else if (hour < 18) {
            greeting = 'Good Afternoon!';
        } else {
            greeting = 'Good Evening!';
        }
        
        welcomeMessage.textContent = `${greeting} Welcome to Umoja Collections!`;
    }
});

// Toggle Active State on Navbar Links
document.querySelectorAll('nav ul li a').forEach(link => {
    link.addEventListener('click', function () {
        document.querySelector('nav ul li a.active')?.classList.remove('active');
        this.classList.add('active');
    });
});

// Form Validation (if needed for a contact form or registration)
function validateForm() {
    const name = document.getElementById('name').value;
    const email = document.getElementById('email').value;
    const message = document.getElementById('message').value;
    let errors = [];
    
    if (!name) errors.push('Name is required.');
    if (!email || !/\S+@\S+\.\S+/.test(email)) errors.push('A valid email is required.');
    if (!message) errors.push('Message is required.');
    
    if (errors.length > 0) {
        alert(errors.join('\n'));
        return false;
    }
    
    return true;
}

// Event Listener for Form Submission (if form exists)
const form = document.getElementById('contact-form');
if (form) {
    form.addEventListener('submit', (e) => {
        if (!validateForm()) {
            e.preventDefault();  // Prevent form submission if validation fails
        }
    });
}
document.addEventListener("DOMContentLoaded", function() {
    const teamMembers = document.querySelectorAll(".team-member");
    let currentMember = 0;

    function showNextMember() {
        // Hide current member
        teamMembers[currentMember].style.display = "none";

        // Move to the next member
        currentMember = (currentMember + 1) % teamMembers.length;

        // Show next member
        teamMembers[currentMember].style.display = "block";
    }

    // Initially show the first team member
    teamMembers[currentMember].style.display = "block";

    // Change team member every 5 seconds
    setInterval(showNextMember, 5000);
});

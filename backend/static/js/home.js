document.addEventListener("DOMContentLoaded", function() {
    // Team Member Carousel Functionality
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

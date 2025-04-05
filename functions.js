// Handling Appointment Booking Form in services.html
document.addEventListener('DOMContentLoaded', function() {
    const appointmentForm = document.querySelector('form'); // Appointment form
    const successMessage = appointmentForm.querySelector('div'); // Success message container

    // Event listener for the appointment booking form
    appointmentForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Display the success message
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.transform = 'scale(1)';
        }, 100);
        
        // Clear form fields after submission
        appointmentForm.reset();
    });
});

// Handling Membership Application Form in membership.html
document.addEventListener('DOMContentLoaded', function() {
    const membershipForm = document.querySelector('form'); // Membership form
    const successMessage = document.getElementById('membership-success'); // Success message container

    // Event listener for the membership application form
    membershipForm.addEventListener('submit', function(event) {
        event.preventDefault(); // Prevent form submission

        // Display the success message
        successMessage.style.display = 'block';
        setTimeout(() => {
            successMessage.style.transform = 'scale(1)';
        }, 100);

        // Clear form fields after submission
        membershipForm.reset();
    });
});

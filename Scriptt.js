document.addEventListener('DOMContentLoaded', () => {
    const form = document.getElementById('signupForm');
    const steps = Array.from(document.querySelectorAll('.form-step'));
    const progressSteps = Array.from(document.querySelectorAll('.progress-bar .step'));
    const nextButtons = Array.from(document.querySelectorAll('.next-btn'));
    const prevButtons = Array.from(document.querySelectorAll('.prev-btn'));
    const submitButton = document.querySelector('.submit-btn');

    let currentStep = 0;

    function showStep(stepIndex) {
        steps.forEach((step, index) => {
            step.style.display = index === stepIndex ? 'block' : 'none';
        });

        progressSteps.forEach((step, index) => {
            step.classList.toggle('active', index <= stepIndex);
        });

        currentStep = stepIndex;
    }

    nextButtons.forEach((button) => {
        button.addEventListener('click', () => {
            if (validateStep(currentStep)) {
                showStep(currentStep + 1);
            }
        });
    });

    prevButtons.forEach((button) => {
        button.addEventListener('click', () => {
            showStep(currentStep - 1);
        });
    });

    function validateStep(stepIndex) {
        const inputs = steps[stepIndex].querySelectorAll('input, select, textarea');
        let isValid = true;

        inputs.forEach((input) => {
            if (input.hasAttribute('required') && !input.value.trim()) {
                isValid = false;
                input.classList.add('error');
            } else {
                input.classList.remove('error');
            }
        });

        return isValid;
    }

    form.addEventListener('submit', (e) => {
        e.preventDefault();
        if (validateStep(currentStep)) {
            // Here you would typically send the form data to your server
            alert('Form submitted successfully!');
        }
    });

    // Contact Us button functionality
    const contactUsBtn = document.getElementById('contactUsBtn');
    contactUsBtn.addEventListener('click', () => {
        alert('Contact information: support@homemadeharmony.com');
    });

    // Initialize the form
    showStep(0);
});
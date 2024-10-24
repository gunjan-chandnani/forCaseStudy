// Handle role selection
document.getElementById("roleForm").addEventListener("submit", function(event) {
    event.preventDefault();
    
    const role = document.getElementById("role").value;
    const errorMessage = document.getElementById("error-message");

    if (role) {
        errorMessage.style.display = "none";
        document.querySelector(".role-box").style.display = "none";
        document.getElementById("authOptions").style.display = "block";
        document.getElementById("backToPrevious").style.display = "none"; // Hide back button on role selection page
    } else {
        errorMessage.style.display = "block";
        errorMessage.textContent = "Please select your role!";
    }
});

// Handle navigation to login or signup
document.getElementById("loginOption").addEventListener("click", function() {
    document.getElementById("authOptions").style.display = "none";
    document.getElementById("loginBox").style.display = "block";
    document.getElementById("backToPrevious").style.display = "block"; // Show back button
});

document.getElementById("signupOption").addEventListener("click", function() {
    document.getElementById("authOptions").style.display = "none";
    document.getElementById("signupBox").style.display = "block";
    document.getElementById("backToPrevious").style.display = "block"; // Show back button
});

// Handle go back
document.getElementById("backToPrevious").addEventListener("click", function() {
    if (document.getElementById("loginBox").style.display === "block" || document.getElementById("signupBox").style.display === "block") {
        document.getElementById("loginBox").style.display = "none";
        document.getElementById("signupBox").style.display = "none";
        document.getElementById("authOptions").style.display = "block";
    } else if (document.getElementById("authOptions").style.display === "block") {
        document.getElementById("authOptions").style.display = "none";
        document.querySelector(".role-box").style.display = "block";
        document.getElementById("backToPrevious").style.display = "none"; // Hide back button on role selection page
    }
});

// Toggle gender dropdown
function toggleGenderDropdown() {
    const genderDropdown = document.getElementById('genderDropdown');
    const isDropdownVisible = genderDropdown.style.display === 'block';

    // Close if open, open if closed
    genderDropdown.style.display = isDropdownVisible ? 'none' : 'block';
}

// Handle gender selection and auto-close the dropdown
const genderOptions = document.querySelectorAll('input[name="gender"]');
const selectedGenderText = document.getElementById('selectedGender');
const genderDropdown = document.getElementById('genderDropdown');

genderOptions.forEach(option => {
    option.addEventListener('change', function() {
        // Set the selected gender in the box
        selectedGenderText.textContent = this.value.charAt(0).toUpperCase() + this.value.slice(1);

        // Close the dropdown after selection
        genderDropdown.style.display = 'none';
    });
});
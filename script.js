let cart = [];
const cartCount = document.getElementById('cart-count');
const cartItems = document.getElementById('cart-items');
const cartTotal = document.getElementById('cart-total');
const cartSection = document.querySelector('.cart-section');
const orderButton = document.getElementById('order-button');
const orderConfirmation = document.getElementById('order-confirmation');

if (cartCount && cartItems && cartTotal && cartSection && orderButton && orderConfirmation) {
    // Function to add food item to cart
    function addToCart(foodName, foodPrice) {
        cart.push({ name: foodName, price: foodPrice });
        updateCartDisplay();
    }

    // Function to update cart display
    function updateCartDisplay() {
        cartCount.textContent = cart.length;
        cartSection.style.display = 'block';
        displayCartItems();
    }

    // Function to display cart items
    function displayCartItems() {
        cartItems.innerHTML = '';
        let total = 0;

        if (cart.length === 0) {
            cartItems.innerHTML = '<p>No items in the cart.</p>';
            orderButton.style.display = 'none'; // Hide order button if cart is empty
        } else {
            cart.forEach(item => {
                total += parseInt(item.price);
                const cartItem = document.createElement('div');
                cartItem.className = 'cart-item';
                cartItem.innerHTML = `<p>${item.name} - ₹${item.price}</p>`;
                cartItems.appendChild(cartItem);
            });
            cartTotal.textContent = total;
            orderButton.style.display = 'block'; // Show order button if items are present
        }
    }

    // Function to confirm the order
    function confirmOrder() {
        cartSection.style.display = 'none'; // Hide cart section
        orderConfirmation.style.display = 'block'; // Show confirmation message
        cart = []; // Clear the cart after confirming the order
        updateCartDisplay(); // Update the display
    }

    // Function to close the order confirmation
    function closeConfirmation() {
        orderConfirmation.style.display = 'none'; // Hide confirmation message
        cartSection.style.display = 'block'; // Show cart again
    }

    // Attach event listeners to "Add to Cart" buttons
    document.querySelectorAll('.add-to-cart').forEach(button => {
        button.addEventListener('click', () => {
            const foodName = button.getAttribute('data-name');
            const foodPrice = button.getAttribute('data-price');
            addToCart(foodName, foodPrice);
        });
    });

    // Event listener for the Confirm Order button
    orderButton.addEventListener('click', confirmOrder);

    // Event listener to close the confirmation message
    document.getElementById('close-cart').addEventListener('click', closeConfirmation);
}
// Function to show the cart
function showCart() {
    document.querySelector('.cart-section').style.display = 'block'; // Show cart section
}

// Event listener for the cart link
document.getElementById('cart-link').addEventListener('click', function(event) {
    event.preventDefault(); // Prevent default anchor behavior
    showCart(); // Show the cart
});


const testimonialSlider = document.querySelector('.testimonial-slider');
const testimonialCards = testimonialSlider.querySelectorAll('.testimonial-card');

let currentSlide = 0;

function showSlide(index) {
  testimonialCards.forEach((card, i) => {
    card.style.display = i === index ? 'block' : 'none';
  });
}

showSlide(currentSlide);

function autoCycle() {
  currentSlide = (currentSlide + 1) % testimonialCards.length;
  showSlide(currentSlide);
}

setInterval(autoCycle, 4000); // Adjust the interval as needed

// Modal
const modal = document.getElementById('myModal');
const modalBtn = document.getElementById('openModalBtn');
const closeBtn = document.querySelector('.close');

modalBtn.addEventListener('click', () => {
  modal.style.display = 'block';
});

closeBtn.addEventListener('click', () => {
  modal.style.display = 'none';
});

// Testimonial Slider

// Cart Functionality


// Testimonial Slider

// Cuisine Slideshow
const cuisineSlider = document.querySelector('.cuisines .cuisine-slider');
const cuisineItems = cuisineSlider?.querySelectorAll('.cuisine-item');
const prevBtn = document.querySelector('.prev-btn');
const nextBtn = document.querySelector('.next-btn');

if (cuisineSlider && cuisineItems.length > 0) {
    let currentCuisineSlide = 0;
    let slideInterval;

    function showCuisineSlide(index) {
        cuisineItems.forEach((item, i) => {
            item.style.transform = `translateX(${i - index}00%)`;
        });
    }

    function startAutoSlide() {
        slideInterval = setInterval(() => {
            currentCuisineSlide = (currentCuisineSlide + 1) % cuisineItems.length;
            showCuisineSlide(currentCuisineSlide);
        }, 3000);
    }

    setTimeout(startAutoSlide, 1000);

    prevBtn?.addEventListener('click', () => {
        currentCuisineSlide = (currentCuisineSlide - 1 + cuisineItems.length) % cuisineItems.length;
        showCuisineSlide(currentCuisineSlide);
    });

    nextBtn?.addEventListener('click', () => {
        currentCuisineSlide = (currentCuisineSlide + 1) % cuisineItems.length;
        showCuisineSlide(currentCuisineSlide);
    });
}

// Offer Cards (Hover Effect)
const offerCards = document.querySelectorAll('.offer-card');

offerCards.forEach(card => {
    card.addEventListener('mouseover', () => {
        card.style.transform = 'scale(1.05)';
    });

    card.addEventListener('mouseout', () => {
        card.style.transform = 'scale(1)';
    });
});

// Dish Slider (Touch Support)
const dishSlider = document.querySelector('.dish-slider');
let startX, endX, isDragging = false;

if (dishSlider) {
    dishSlider.addEventListener('mousedown', e => {
        startX = e.clientX;
        isDragging = true;
    });

    dishSlider.addEventListener('mousemove', e => {
        if (isDragging) {
            const dx = e.clientX - startX;
            dishSlider.scrollLeft -= dx;
            startX = e.clientX;
        }
    });

    dishSlider.addEventListener('mouseup', () => {
        isDragging = false;
    });

    dishSlider.addEventListener('touchstart', e => {
        startX = e.touches[0].clientX;
        isDragging = true;
    });

    dishSlider.addEventListener('touchmove', e => {
        if (isDragging) {
            const dx = e.touches[0].clientX - startX;
            dishSlider.scrollLeft -= dx;
            startX = e.touches[0].clientX;
        }
    });

    dishSlider.addEventListener('touchend', () => {
        isDragging = false;
    });
}

// Customer Reviews (Filtering)
const reviewSlider = document.querySelector('.review-slider');
const reviewItems = reviewSlider?.querySelectorAll('.review-item');
const ratingFilters = document.querySelectorAll('.rating-filter');

if (ratingFilters.length > 0) {
    ratingFilters.forEach(filter => {
        filter.addEventListener('click', () => {
            const rating = filter.dataset.rating;
            reviewItems.forEach(item => {
                item.style.display = item.dataset.rating === rating ? 'block' : 'none';
            });
        });
    });
}

// Features (Hover Effect)
const featureItems = document.querySelectorAll('.feature-item');

featureItems.forEach(item => {
    item.addEventListener('mouseover', () => {
        item.style.transform = 'scale(1.05)';
    });

    item.addEventListener('mouseout', () => {
        item.style.transform = 'scale(1)';
    });
});

// CTA (Progress Bar)
const progressBar = document.getElementById('progressBar');
const ctaBtn = document.getElementById('ctaBtn');

let progress = 0;

if (ctaBtn && progressBar) {
    ctaBtn.addEventListener('click', () => {
        progress += 10;
        progressBar.style.width = `${progress}%`;

        if (progress === 100) {
            ctaBtn.textContent = 'Completed!';
        }
    });
}

// Chef Slider (Pagination Dots)
const chefSlider = document.querySelector('.chef-slider');
const chefItems = chefSlider?.querySelectorAll('.chef-item');
const paginationDots = document.querySelectorAll('.pagination-dot');

if (chefSlider && chefItems.length > 0) {
    let currentChefSlide = 0;

    function showChefSlide(index) {
        chefItems.forEach((item, i) => {
            item.style.transform = `translateX(${i - index}00%)`;
        });

        paginationDots.forEach((dot, i) => {
            dot.classList.toggle('active', i === index);
        });
    }

    showChefSlide(currentChefSlide);

    paginationDots.forEach((dot, i) => {
        dot.addEventListener('click', () => {
            showChefSlide(i);
        });
    });
}

// Become Member (Form Validation)
const signupForm = document.getElementById('signupForm');
const nameInput = document.getElementById('name');
const emailInput = document.getElementById('email');
const passwordInput = document.getElementById('password');

if (signupForm) {
    signupForm.addEventListener('submit', (event) => {
        event.preventDefault();

        if (nameInput.value === '' || emailInput.value === '' || passwordInput.value === '') {
            alert('Please fill in all fields.');
        } else {
            alert('Signup successful!');
            signupForm.reset();
        }
    });
}

// Popular Locations (Map Integration)
const mapContainer = document.getElementById('mapContainer');

// Initialize a map using your preferred mapping API
// Add markers for popular locations and handle user interactions

// Footer (Creative Background)
const footerSections = document.querySelectorAll('#footer-work-time, #service-locations');

footerSections.forEach(section => {
    section.style.backgroundImage = 'url(your-image.jpg)'; // Replace with your image path
});

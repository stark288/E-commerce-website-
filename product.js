function enlargeImage(src) {
    document.getElementById("enlargedImg").src = src;

    // Clear any existing 'active' thumbnail
    let thumbnails = document.querySelectorAll('.img-thumbnail');
    thumbnails.forEach(thumbnail => thumbnail.classList.remove('active'));

    //  Add 'active' class to the clicked thumbnail
    let clickedThumbnail = document.querySelector(`img[src="${src}"]`);
    clickedThumbnail.classList.add('active');
}
const storageButtons = document.querySelectorAll('.storage-btn');
storageButtons.forEach(button => {
    button.addEventListener('click', function() {
        // Remove 'selected' class from all buttons
        storageButtons.forEach(btn => {
            btn.classList.remove('selected');
        });

        // Add 'selected' class to the clicked button
        this.classList.add('selected');
    });
});
const colorButtons = document.querySelectorAll('.color-btn');

// Add event listener to each color button
colorButtons.forEach(button => {
    button.addEventListener('click', function() {
        const color = this.value; // Get the color value from the button

        // Remove 'selected' class from all buttons
        colorButtons.forEach(btn => {
            btn.classList.remove('selected');
            btn.style.backgroundColor = ''; // Reset background color
            btn.style.color = ''; // Reset text color
        });

        // Add 'selected' class to the clicked button
        this.classList.add('selected');

        // Change button background color
        this.style.backgroundColor = color;

        // Change button text color (assuming contrasting color for visibility)
        this.style.color = color === 'Yellow' ? 'black' : 'white'; // Example: White text for dark backgrounds
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const quantityInput = document.getElementById('quantityInput');
    const totalPriceLabel = document.getElementById('totalPrice');
    const pricePerItem = 87999; // Price for 1 item
    const maxQuantity = 5; // Maximum quantity allowed

    // Function to update total price
    function updateTotalPrice() {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = quantity * pricePerItem;
        totalPriceLabel.textContent = `₹${totalPrice.toLocaleString()}`;
    }

    // Event listener for decrease button
    decreaseBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            updateTotalPrice();
        }
    });

    // Event listener for increase button
    increaseBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity >= maxQuantity) {
            quantity= maxQuantity;
        }
        else if (quantity < 1){
        quantity = 1;}
        else if (quantity < maxQuantity){
        quantity++;}
        quantityInput.value = quantity;
        updateTotalPrice();
    });

    // Event listener for quantity input
    quantityInput.addEventListener('input', function() {
        let quantity = parseInt(quantityInput.value);
        if (isNaN(quantity) || quantity < 1) {
            quantity = 1;
        } else if (quantity > maxQuantity) {
            quantity = maxQuantity;
        }
        quantityInput.value = quantity;
        updateTotalPrice();
    });
    // Initialize total price
    updateTotalPrice();
});
$(document).ready(function () {
    $('#ex1 a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if (window.history.replaceState) {
            window.history.replaceState(null, null, target);
        }
    });
});


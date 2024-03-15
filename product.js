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
        this.style.color = color === 'Yellow' ? 'black' : 'white';

    });
});

document.addEventListener('DOMContentLoaded', function() {
    const decreaseBtn = document.getElementById('decreaseBtn');
    const increaseBtn = document.getElementById('increaseBtn');
    const quantityInput = document.getElementById('quantityInput');
    const totalPriceLabel = document.getElementById('totalPrice');
    const storageButtons = document.querySelectorAll('.storage-btn');
    let pricePerItem = 87999; // Default price for 128GB
    const maxQuantity = 5; // Maximum quantity allowed

    // Event listeners for storage buttons
    storageButtons.forEach(button => {
        button.addEventListener('click', function() {
            const storageType = this.value; // Get the storage value from the button
            pricePerItem = getPricePerItem(storageType); // Update the price per item based on selected storage
            updateTotalPrice(pricePerItem); // Update the total price with the new price per item
        });
    });

    // Function to update total price
    function updateTotalPrice(pricePerItem) {
        const quantity = parseInt(quantityInput.value);
        const totalPrice = quantity * pricePerItem;
        totalPriceLabel.textContent = `₹${totalPrice.toLocaleString()}`;
    }

    // Function to get price per item based on selected storage
    function getPricePerItem(storageType) {
        switch (storageType) {
            case '128GB':
                return 87999;
            case '256GB':
                return 99999;
            case '512GB':
                return 119999;
            case '1TB':
                return 149999;
            default:
                return 87999; // Default price for 128GB model if storage type is not recognized
        }
    }

    // Event listener for decrease button
    decreaseBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity > 1) {
            quantity--;
            quantityInput.value = quantity;
            updateTotalPrice(pricePerItem);
        }
    });

    // Event listener for increase button
    increaseBtn.addEventListener('click', function() {
        let quantity = parseInt(quantityInput.value);
        if (quantity < maxQuantity) {
            quantity++;
            quantityInput.value = quantity;
            updateTotalPrice(pricePerItem);
        }
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
        updateTotalPrice(pricePerItem);
    });

    // Initialize total price with default values
    updateTotalPrice(pricePerItem);
});



$(document).ready(function () {
    $('#ex1 a[data-bs-toggle="tab"]').on('shown.bs.tab', function (e) {
        var target = $(e.target).attr("href");
        if (window.history.replaceState) {
            window.history.replaceState(null, null, target);
        }
    });
});


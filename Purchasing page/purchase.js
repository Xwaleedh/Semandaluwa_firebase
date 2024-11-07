// List of available products with their details
const products = {
    banana: {
        name: "Bananas",
        description: "Bananas are a healthy source of fiber, potassium, vitamin B6, vitamin C, and various antioxidants and phytonutrients.",
        price: "$1.20 per kg",
        image: "../Assets/Banana.jpg"
    },
    mango: {
        name: "Mangoes",
        description: "Mangoes are an edible stone fruit produced by the tropical tree Mangifera indica.",
        price: "$2.50 per kg",
        image: "../Assets/Mango.jpg"
    },
    "wood-apple": {
        name: "Wood Apple",
        description: "Wood apple is rich in thiamine and riboflavin, the chemicals that are effective in detoxifying the body.",
        price: "$3.00 per kg",
        image: "../Assets/Wood Apple.jpg"
    },
    cashew: {
        name: "Cashew",
        description: "The cashew you eat is actually the seed. Initially, it is surrounded by a double shell with components like urushiol and a potential skin irritant.",
        price: "$10.00 per kg",
        image: "../Assets/Cashew.jpg"
    },
    coconut: {
        name: "Coconut",
        description: "The coconut tree is botanically named Cocus Nucifera. Coconut water contains 94% water with approximately 46 calories a cup.",
        price: "$1.00 per coconut",
        image: "../Assets/Coconut.jpg"
    },
    guava: {
        name: "Guava",
        description: "Guavas are often referred to as 'super fruits' because of their high vitamin content.",
        price: "$2.00 per kg",
        image: "../Assets/Guava.jpg"
    },
    lemon: {
        name: "Lemon",
        description: "The lemon is a species of small evergreen trees in the flowering plant family Rutaceae, native to Asia.",
        price: "$1.50 per kg",
        image: "../Assets/Lemon.jpg"
    },
    "king-coconut": {
        name: "King Coconut",
        description: "King coconuts are native to Sri Lanka. They are also found in India and Indonesia.",
        price: "$1.00 per king coconut",
        image: "../Assets/King Coconut.jpg"
    },
    tamarind: {
        name: "Tamarind",
        description: "Tamarind is a good source of vitamins A, C, and K. It is also a good source of fiber, calcium, and iron.",
        price: "$4.00 per kg",
        image: "../Assets/Tamarind.jpg"
    }
};

// Function to load product details based on the query parameter
function loadProductDetails() {
    const urlParams = new URLSearchParams(window.location.search);
    const item = urlParams.get('item');
    
    if (products[item]) {
        const product = products[item];
        document.getElementById('product-title').textContent = product.name;
        document.getElementById('product-description').textContent = product.description;
        document.getElementById('product-price').textContent = `Price: ${product.price}`;
        document.getElementById('product-image').src = product.image;
    } else {
        document.getElementById('product-container').innerHTML = "<h5 class='text-center'>Product not found!</h5>";
    }
}

// Load the product details when the page loads
window.onload = loadProductDetails;
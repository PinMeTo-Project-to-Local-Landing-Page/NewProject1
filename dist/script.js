"use strict";
const stores = [
    {
        name: "Downtown Store",
        address: "123 Main St",
        hours: "Open today 07-20",
        image: "https://via.placeholder.com/100x60",
        features: ["Cafe", "Pick up"]
    },
    {
        name: "Suburb Store",
        address: "456 Oak Ave",
        hours: "Open today 07-20",
        image: "https://via.placeholder.com/100x60",
        features: ["Cafe", "Pick up"]
    },
    {
        name: "Suburb Store",
        address: "456 Oak Ave",
        hours: "Open today 07-20",
        image: "https://via.placeholder.com/100x60",
        features: ["Cafe", "Pick up"]
    },
    {
        name: "Suburb Store",
        address: "456 Oak Ave",
        hours: "Open today 07-20",
        image: "https://via.placeholder.com/100x60",
        features: ["Cafe", "Pick up"]
    },
    {
        name: "Suburb Store",
        address: "456 Oak Ave",
        hours: "Open today 07-20",
        image: "https://via.placeholder.com/100x60",
        features: ["Cafe", "Pick up"]
    },
    {
        name: "Suburb Store",
        address: "456 Oak Ave",
        hours: "Open today 07-20",
        image: "https://via.placeholder.com/100x60",
        features: ["Cafe", "Pick up"]
    },
    {
        name: "Suburb Store",
        address: "456 Oak Ave",
        hours: "Open today 07-20",
        image: "https://via.placeholder.com/100x60",
        features: ["Cafe", "Pick up"]
    },
    {
        name: "Suburb Store",
        address: "456 Oak Ave",
        hours: "Open today 07-20",
        image: "https://via.placeholder.com/100x60",
        features: ["Cafe", "Pick up"]
    },
    // Add more stores as needed
];
function renderStores(storeList) {
    const storeListElement = document.getElementById('storeList');
    if (storeListElement) {
        storeListElement.innerHTML = '';
        storeList.forEach(store => {
            const storeElement = document.createElement('div');
            storeElement.className = 'store-item';
            storeElement.innerHTML = `
                <img src="${store.image}" alt="${store.name}" class="store-image">
                <div class="store-info">
                    <div class="store-name">${store.name}</div>
                    <div class="store-address">${store.address}</div>
                    <div class="store-hours">${store.hours}</div>
                    <div class="store-features">
                        ${store.features.map(feature => `<span class="feature">${feature}</span>`).join('')}
                    </div>
                </div>
                <button class="select-btn">Select</button>
            `;
            storeListElement.appendChild(storeElement);
        });
    }
}
function init() {
    renderStores(stores);
    const searchBtn = document.getElementById('searchBtn');
    const storeSearch = document.getElementById('storeSearch');
    if (searchBtn && storeSearch) {
        searchBtn.addEventListener('click', () => {
            const searchTerm = storeSearch.value.toLowerCase();
            const filteredStores = stores.filter(store => store.name.toLowerCase().includes(searchTerm) ||
                store.address.toLowerCase().includes(searchTerm));
            renderStores(filteredStores);
        });
    }
    // Add more event listeners and functionality as needed
}
document.addEventListener('DOMContentLoaded', init);

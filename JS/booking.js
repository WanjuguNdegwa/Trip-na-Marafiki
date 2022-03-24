const destination = document.querySelector("#travel");
const cost = document.querySelector("#cost");

destination.addEventListener("submit", showCost);
function showCost(ev) {
    ev.preventDefault();
    function randomPriceRange(min, max) {
        return Math.floor(Math.random() * (max - min + 1)) + min;
    }
    cost.innerHTML =`Trip booked! Pay Ksh.${randomPriceRange(250,500)}`;
}
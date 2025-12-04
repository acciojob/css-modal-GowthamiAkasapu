//your JS code here. If required.
const modal = document.getElementById("myModal");
const btn = document.getElementById("openModal");
const closeBtn = document.querySelector(".close-modal");

// Opens the modal by adding the class that sets display: flex
btn.onclick = function() {
    modal.classList.add("show-modal");
}

// Closes the modal by removing the class
closeBtn.onclick = function() {
    modal.classList.remove("show-modal");
}

// Closes the modal if the click event targets the modal backdrop itself
window.onclick = function(event) {
    if (event.target === modal) {
        modal.classList.remove("show-modal");
    }
}
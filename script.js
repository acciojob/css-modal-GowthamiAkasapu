//your JS code here. If required.
const modal = document.getElementById("myModal");

const btn = document.getElementById("openModal");

const closeBtn = document.querySelector(".close-modal");

btn.onclick = function() {
    modal.classList.add("show-modal");
}

closeBtn.onclick = function() {
    modal.classList.remove("show-modal");
}

window.onclick = function(event) {
    if (event.target == modal) {
        modal.classList.remove("show-modal");
    }
}